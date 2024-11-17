import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

interface SectionBottom {
  toggleDialog?: () => void;
}

const SectionBottom: React.FC<SectionBottom> = ({ toggleDialog }) => {
  return (
    <div className="flex px-10 items-center">
      <p className="w-6/12 text-sm text-gray-500">
        Ao adquirir uma caixa de sorte no servidor GOAT dentro do GTA RP, o
        cliente está ciente e aceita que a compra não garante um item
        específico. O conteúdo das caixas de sorte é aleatório, sendo essa a
        essência do sistema, onde a experiência de surpresa faz parte da compra.
        Todos os itens obtidos são cosméticos exclusivos, projetados para
        personalizar seu personagem e destacar seu estilo no mundo imersivo do
        RP, sem oferecer vantagens competitivas. Isso inclui roupas, acessórios,
        e veículos personalizados, permitindo uma customização única e
        diferenciada.
      </p>

      <div className="flex gap-5 w-6/12 justify-center items-center">
        <Button
          bgClass="bg-mythical-gradient"
          borderColorClass="border-color-mythical"
          text="RETORNAR"
          iconRight="/src/assets/icon-button-return.svg"
        />

        <Button
          bgClass="bg-rare-gradient"
          borderColorClass="border-color-rare"
          onClick={toggleDialog}
          customStyles="relative overflow-hidden px-8 py-4"
        >
          <motion.div
            className="flex items-center justify-center z-50"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <p className="font-semibold text-white text-xl mr-4 b">
              ABRIR CAIXA
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
    </div>
  );
};

export default SectionBottom;
