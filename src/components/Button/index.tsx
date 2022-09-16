import React from "react";
import * as S from "./styles";

interface ButtonProps {
  text?: string;
  type?: "primary" | "secondary";
  onClick?: () => void
  children?: any
}

const Cadastro: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <>
      {type === "primary" && (
        <S.PrimaryButtonContainer onClick={onClick}>
        {text}
        </S.PrimaryButtonContainer>
      )}
      {type === "secondary" && (
        <S.SecondaryButtonContainer onClick={onClick}>
          {text}
        </S.SecondaryButtonContainer>
      )}
    </>
    
  );
};

export default Cadastro;
