import React from "react";
import { boxesRarity, colorsRarity } from "../helpers";

const SectionTop: React.FC = () => {
  return (
    <div className="flex flex-row gap-5">
      {boxesRarity.map((item, index) => (
        <div className="flex justify-center items-center gap-2">
          <div
            className={`w-[20px] h-[20px] rounded `}
            style={{
              border: `1px solid ${item.borderColor}`,
              boxShadow: index === 0 ? "0px 0px 25px 0px #FF0099BF" : "",
              backgroundImage: `${colorsRarity[item.rarity].background}`,
            }}
          ></div>
          <span
            className="text-white font-semibold"
            style={{
              fontSize: "8px",
              borderRight: index === 0 ? "1px solid #FFFFFF26" : "none",
              paddingRight: index === 0 ? "16px" : "none",
            }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionTop;
