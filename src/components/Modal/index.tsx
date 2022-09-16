import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Button from "../Button";
import * as S from "./styles";

interface IModal {
  title: string;
  children?: any;
  buttonTitle: string;
  type?: string;
}

export default function Modal({ title, children, buttonTitle, type }: IModal) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {type === "edit" ? (
        <FaPencilAlt color="#fff" onClick={toggleModal} />
      ) : (
        <Button text={buttonTitle} type="primary" onClick={toggleModal}>
          {buttonTitle}
        </Button>
      )}
      {modal && (
        <S.Modal>
          <S.Overlay onClick={toggleModal}></S.Overlay>
          <S.ModalContent>
            <S.Title>{title}</S.Title>
            {children}
            <S.CloseModal onClick={toggleModal}>x</S.CloseModal>
          </S.ModalContent>
        </S.Modal>
      )}
    </>
  );
}
