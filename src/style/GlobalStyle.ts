import { css } from "styled-components";
import { br } from "../utils/Device";
import { theme } from "./theme";

const GlobalStyle = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        font-weight: 400;
        font-style: normal;
    }
    h1,
    h2,
    h3,
    h4 {
        font-family: "Bellefair";
    }
    h1 {
        color: #ffffff;
        font-size: clamp(5rem, 3.4595rem + 6.5728vw, 9.375rem);
        line-height: clamp(6.25rem, 4.6655rem + 6.7606vw, 10.75rem);
    }
    h2 {
        text-align: center;
        font-size: clamp(3.5rem, 2.9718rem + 2.2535vw, 5rem);
        line-height: clamp(4rem, 3.3838rem + 2.6291vw, 5.75rem);
        ${br.md} {
            text-align: center;
        }
        ${br.xl} {
            text-align: left;
        }
    }
    h3 {
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        font-size: clamp(1.5rem, 1.1479rem + 1.5023vw, 2.5rem);
    }
    h4 {
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
        color: #ffffff;
        font-size: clamp(1rem, 0.8239rem + 0.7512vw, 1.5rem);
        opacity: 0.5;
    }
    h5 {
        font-family: "Barlow Condensed";
        text-transform: uppercase;
        color: #ffffff;
        font-size: clamp(1rem, 0.7359rem + 1.1268vw, 1.75rem);
        letter-spacing: clamp(0.16875rem, 0.1242rem + 0.1901vw, 0.2953125rem);
        line-height: clamp(1.5rem, 1.2799rem + 0.939vw, 2.125rem);
    }

    p {
        font-family: "Barlow";
        line-height: 1.25rem;
        text-align: center;
        color: ${theme.colors.primary.Default};
        font-size: clamp(0.9375rem, 0.9155rem + 0.0939vw, 1rem);
        line-height: clamp(1.5625rem, 1.4085rem + 0.6573vw, 2rem);
    }
    html,
    body {
        height: 100%;
        min-height: 100vh;
    }
    #root {
        height: 100%;
    }
`;

export default GlobalStyle;
