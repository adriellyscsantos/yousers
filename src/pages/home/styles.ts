import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Box = styled.div`
 
`;
export const Wrapper = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 80px;
  border-radius: 10px;
  height: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  color: ${theme.colors.white};
  font-weight: 400;
  font-size: 20px;
`;

export const SignOut = styled.p`
  color: ${theme.colors.white};
  font-size: 10px;
  text-align: end;
`;

export const ContainerButton = styled.div`
  width: 15%;
`;

export const InputSearch = styled.input`
  padding: 10px;
  color: ${theme.colors.dark};
  font-size: 12px;
  border-radius: 15px;
  background-color: ${theme.colors.default};
  outline: none;
  width: 30%;
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.primary};
  background-color: transparent;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  color: ${theme.colors.primary};
`;

export const ContainerSearch = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Result = styled.p`
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 400;
`;
export const WrapperSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UsersSignUp = styled.p`
  color: ${theme.colors.white};
  font-size: 17px;
  font-weight: 500;
  width: 30%;
  margin-bottom: 50px;
`;

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin-top: 20px;
`;

export const Pagination = styled.button`
  padding: 10px;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.table};
  border-radius: 5px;
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export const WrapperExport = styled.div`
  margin-bottom: 40px;
  display: flex;
  width: 20%;
  gap: 10px;

  .export {
    background-color: ${theme.colors.primary};
    padding: 8px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    color: ${theme.colors.white};
    border-radius: 15px;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.secondary};
      cursor: pointer;
      border: solid 1px ${theme.colors.primary};
    }
  }
`;
