import styled from 'styled-components'
import theme from '../../../styles/theme';

export const Input = styled.input`
 border: 1px solid  ${theme.colors.primary};
background-color: transparent;
border-radius: 5px;
padding: 15px;
width: 100%;
color: ${theme.colors.primary};
`

export const Error = styled.p`
font-size: 12px;
color: red;
`