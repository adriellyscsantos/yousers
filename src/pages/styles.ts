import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  height: 100vh;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  background: ${theme.colors.primary};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 30px 30px 0px;
`;
export const FormWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBlock = styled.div`
  width: 50%;
  height: auto;

  .btn__criarconta {
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
`;

export const TitleLogin = styled.h2`
  color: ${theme.colors.primary};
`;

export const CreateAccount = styled.p`
  color: ${theme.colors.primary};
  font-size: 12px;
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.primary};
  background-color: transparent;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  color: ${theme.colors.primary};
`;
export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
