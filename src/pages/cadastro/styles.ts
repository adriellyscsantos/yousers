import styled from "styled-components";
import theme from "../../../styles/theme";

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
  border-radius: 30px 0px 0px 30px;
`;
export const FormWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
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
