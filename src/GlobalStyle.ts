import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration:none;
    }
    button {
        &:focus,
        &:active {
            outline: none;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
