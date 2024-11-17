import { useState, useEffect } from "react";
import { boxes, boxesSorted, colorsRarity } from "../helpers";
import { motion } from "framer-motion";
import { Box, BoxSorted } from "../interfaces";
import Button from "./Button";

const Roulette = ({ toggleDialog }: { toggleDialog: () => void }) => {
  const [isRolling, setIsRolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [acceleration, setAcceleration] = useState(5);
  const [drawnBox, setDrawnBox] = useState<BoxSorted | undefined>(undefined);

  const replicatedBoxes: Box[] = [].concat(...Array(20).fill(boxes));

  const getRandomBox = () => {
    const randomIndex = Math.floor(Math.random() * boxesSorted.length);
    return boxesSorted[randomIndex];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRolling(false);

      setTimeout(() => {
        const randomBox = getRandomBox();
        setDrawnBox(randomBox as BoxSorted);
      }, 1000);
    }, 9000);

    const timer2 = setTimeout(() => {
      setAcceleration(1);
    }, 8000);

    const timer3 = setTimeout(() => {
      setAcceleration(3);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => prev - acceleration);
      }, 5);

      return () => clearInterval(interval);
    }
  }, [isRolling, acceleration]);

  const transformStyle = `translateX(${scrollPosition}px)`;

  return (
    <div className="relative w-full">
      {(isRolling || !drawnBox) && (
        <>
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 text-3xl z-50">
            <img src="/src/assets/chevron-down.png" alt="" />
          </div>

          <div className="relative w-full h-32 overflow-hidden">
            <div
              className="roulette-container flex"
              style={{
                transform: isRolling
                  ? transformStyle
                  : `translateX(${scrollPosition}px)`,
                transition: isRolling ? "none" : "transform 0s ease-out", // Remove transição quando parar
              }}
            >
              {replicatedBoxes.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className={`min-w-28 w-32 h-32 mx-2 rounded-md border-4 flex justify-center items-center`}
                  style={{
                    boxShadow:
                      item.rarity === "exotic"
                        ? "0px 0px 25px 0px #FF0099BF"
                        : "",
                    backgroundImage: `${colorsRarity[item.rarity].background}`,
                    border: `1px solid ${colorsRarity[item.rarity].border}`,
                  }}
                >
                  <img
                    className="w-[72px] h-[72px]"
                    src="/src/assets/hat-skin.png"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {!isRolling && !!drawnBox && (
        <div className="flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="flex flex-col gap-6 items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <div className="flex gap-1">
                <p className="text-white text-xl">Capuz Natalino -</p>
                <p className="text-gray-500 text-xl">
                  {drawnBox?.name || "Exótico"}
                </p>
              </div>

              <div
                className={`min-w-28 w-32 h-32 rounded-md border-4 flex justify-center items-center`}
                style={{
                  boxShadow:
                    drawnBox?.rarity === "exotic"
                      ? "0px 0px 25px 0px #FF0099BF"
                      : "",
                  backgroundImage: `${
                    colorsRarity[drawnBox?.rarity || "epic"].background
                  }`,
                  border: `1px solid ${
                    colorsRarity[drawnBox?.rarity || "epic"].border
                  }`,
                }}
              >
                <img
                  className="w-[72px] h-[72px]"
                  src="/src/assets/hat-skin.png"
                  alt=""
                />
              </div>
            </motion.div>
          </div>

          <Button
            bgClass="bg-rare-gradient"
            borderColorClass="border-color-rare"
            onClick={toggleDialog}
            customStyles="relative overflow-hidden px-12 py-2"
          >
            <motion.div
              className="flex items-center justify-center z-50"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <p className="font-semibold text-white text-xl mr-4 b">
                ABRIR MAIS CAIXA
              </p>
              <img src="/src/assets/icon-button-open.svg" alt="" />
            </motion.div>
            <img
              className="absolute opacity-10"
              src="/src/assets/background-button.png"
              alt=""
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Roulette;
