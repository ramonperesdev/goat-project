import React from "react";

// Definindo a tipagem das props
interface ButtonProps {
  bgClass: string; // Classe de fundo do botão (ex: "bg-mythical-gradient")
  borderColorClass: string; // Classe de borda do botão (ex: "border-color-mythical")
  text?: string; // Texto do botão
  iconRight?: string; // Caminho do ícone à direita (opcional)
  onClick?: () => void; // Função para o clique (opcional)
  customStyles?: string; // Estilos customizados adicionais (opcional)
  children?: React.ReactNode; // Estilos customizados adicionais (opcional)
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconRight,
  bgClass,
  borderColorClass,
  onClick,
  customStyles,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgClass} ${borderColorClass} px-4 py-2 rounded-md h-fit border-1 border-solid flex items-center justify-center ${customStyles}`}
    >
      {children ? (
        <>{children}</>
      ) : (
        <>
          <p className="font-semibold text-white text-xl pr-4 mr-4 border-r-1 border-gray-border">
            {text}
          </p>
          {iconRight && <img src={iconRight} alt="right-icon" />}
        </>
      )}
    </button>
  );
};

export default Button;
