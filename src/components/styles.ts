import styled from "styled-components";
import theme from "../../styles/theme";

export const Table = styled.table`
  padding: 10px;
  border-collapse: separate;
  border: 1px solid ${theme.colors.table};
  border-radius: 5px;
  width: 100%;
  overflow-y: scroll ;
`;

export const FirstTableItems = styled.tr`
  padding: 30px;
  margin-bottom: 15px;
`;

export const TableItems = styled.tr`
  border: 1px solid ${theme.colors.table};
  border-radius: 5px;
  padding: 15px;
`;

export const TableItem = styled.th`
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  padding: 30px;
`;
export const TableItemLast = styled.td`
  padding: 30px;
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 300;
`;

export const Input = styled.input`
  padding: 10px;
  color: ${theme.colors.dark};
  font-size: 12px;
  border-radius: 15px;
  background-color: ${theme.colors.default};
  outline: none;
  width: 30%;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Result = styled.p`
  color: ${theme.colors.white};
  font-size: 12px;
`;
