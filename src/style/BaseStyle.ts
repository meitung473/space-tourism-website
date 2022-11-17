import { createGlobalStyle } from "styled-components";
import { ResetStyle } from "../utils/globalStyle";
import GlobalStyle from "./GlobalStyle";

const BaseStyle = createGlobalStyle`
    ${ResetStyle}
    ${GlobalStyle}
`;

export default BaseStyle;
