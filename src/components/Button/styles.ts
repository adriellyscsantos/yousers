import styled from "styled-components";
import theme from "../../../styles/theme";

export const PrimaryButtonContainer = styled.button`
  background-color: ${theme.colors.primary};
  padding: 15px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.white};
  border-radius: 15px;
  width: 100%;

  &:hover {
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }
`;

export const SecondaryButtonContainer = styled.button`
  padding: 15px;
  background-color: ${theme.colors.default};
`;
