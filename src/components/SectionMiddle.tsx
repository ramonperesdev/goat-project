import React from "react";

const SectionMiddle: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col gap-3 justify-center items-center">
        <span className="text-4xl text-white font-bold">Caixa GOAT</span>
        <span className="text-xs text-gray-500">
          Itens especiais com um toque GOAT de SER.
        </span>
      </div>

      <img
        className="w-[330px] h-[245px]"
        src="/src/assets/box-goat.png"
        alt=""
      />

      <div
        className="flex bg-exotic-gradient h-fit border-1 border-solid border-color-exotic px-9 py-6 rounded-md gap-2 justify-center items-center"
        style={{
          boxShadow: "0px 0px 25px 0px #FF0099BF",
        }}
      >
        <img
          className="w-[72px] h-[72px]"
          src="/src/assets/hat-skin.png"
          alt=""
        />

        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <h2 className="text-white font-bold">MELHOR ITEM - </h2>
            <h2 className="text-gray-500 font-bold">~ 5.000</h2>
          </div>
          <div className="flex gap-1 items-center">
            <h4 className="text-white">Capuz Natalino - </h4>
            <h4 className="text-gray-500">Exótico</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMiddle;
