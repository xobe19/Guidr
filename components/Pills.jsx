import React, { useState } from "react";

const Pills = ({ itemList, selectedPill = () => {} , multiSelect}) => {
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

