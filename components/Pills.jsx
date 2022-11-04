import React from "react";

const Pills = ({ itemList, selectedPill = () => {}, multiSelect }) => {
  const handleClick = (item) => {
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
              className={
                (item.selected ? "bg-green-500" : "bg-blue-500") +
                " inline-block py-2 px-4 shadow-md no-underline rounded-full  text-white font-sans font-semibold text-sm border-blue hover:outline hover:outline-blue-400 active:shadow-none mr-2 mb-2 cursor-default"
              }
              onClick={(e) => handleClick(item)}
            >
              {item.text || ""}
            </span>
          ))}
      </>
    );
  }
};

export default Pills;
