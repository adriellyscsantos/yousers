import styled from "styled-components";
import theme from "../../../styles/theme";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
export const Title = styled.h2`
  color: ${theme.colors.primary};
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: ${theme.colors.white};
  padding: 30px;
  border-radius: 3px;
  width: 30%;
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  outline: none;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
`;
