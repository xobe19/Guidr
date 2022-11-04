import React, { useState } from "react";

const Pills = ({ itemLst, selectedPill = () => {} }) => {
  let [itemList, setItemList] = useState(itemLst);
console.log(itemLst);
  const handleClick = (item) => {
    let clonedArray = JSON.parse(JSON.stringify(itemList));
    for(let i = 0; i < clonedArray.length; i++) {
      if(clonedArray[i]['id'] == item['id']) {
        clonedArray[i].selected = !clonedArray[i].selected;
      }
    }
    setItemList(clonedArray);
    selectedPill(item);
  };
  if (!itemList) {
    console.error("Missing itemList. Hence there is nothing to display");
    return null;
  } else {
    return (
      <>
        {itemList.length > 0 &&
          itemList.map((item, index) => (
            <span
              key={item.id || index}
              className="pillContainer"
              onClick={(e) => handleClick(item)}
              style={{
                backgroundColor: !item.selected
                  ? item.pillColor
                    ? item.pillColor
                    : "azure"
                  : item.selectedPillColor || "violet",
                color: item.textColor || "black",
              }}
            >
              {item.text || ""}
            </span>
          ))}
      </>
    );
  }
};

export default Pills;

