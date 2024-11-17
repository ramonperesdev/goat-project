import Roulette from "../components/Roulette";
import CustomDialog from "../components/Dialog";
import { useState } from "react";
import SectionBottom from "../components/SectionBottom";
import SectionBoxes from "../components/SectionBoxes";
import SectionMiddle from "../components/SectionMiddle";
import SectionTop from "../components/SectionTop";

export function Home() {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/src/assets/background-home.png)",
          opacity: 0.2,
        }}
      ></div>

      <div className="flex-col relative z-10 h-screen bg-dark-blue-opacity-90 flex justify-center items-center">
        <div className="flex-col flex justify-center items-center max-w-[1302px] w-full gap-16">
          <SectionTop />

          <SectionMiddle />

          <div className="flex flex-col gap-8">
            <SectionBoxes />
            <SectionBottom toggleDialog={toggleDialog} />
          </div>

          <CustomDialog
            open={open}
            onOpenChange={setOpen}
            style={{
              width: "80%",
            }}
          >
            <Roulette toggleDialog={toggleDialog} />
          </CustomDialog>
        </div>
      </div>
    </div>
  );
}
