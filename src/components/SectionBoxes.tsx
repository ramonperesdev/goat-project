import React from "react";
import { boxes, colorsRarity } from "../helpers";

const SectionBoxes: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2.5">
      {boxes.map((item) => (
        <div
          className={`w-[120px] h-[120px] border-1 border-solid flex flex-col justify-center items-center rounded-md`}
          style={{
            boxShadow:
              item.rarity === "exotic" ? "0px 0px 25px 0px #FF0099BF" : "",
            border: `1px solid ${colorsRarity[item.rarity].border}`,
            backgroundImage: `${colorsRarity[item.rarity].background}`,
          }}
        >
          <img
            className="w-[72px] h-[72px]"
            src="/src/assets/hat-skin.png"
            alt=""
          />
          <p className="text-gray-300 text-sm">{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionBoxes;
