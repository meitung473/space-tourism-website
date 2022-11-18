import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { theme } from "./style/theme";
import { IWithPathStyled } from "./types/global";
import { br } from "./utils/Device";

let sm = "mobile";
let md = "tablet";
let xl = "desktop";

const path2backgroundImage = (path: string) => {
    const requireImageWithSize = (size: string) =>
        new URL(
            `./assets/${path}/background-${path}-${size}.jpg`,
            import.meta.url
        ).href;

    // require(`./assets/${path}/background-${path}-${size}.jpg`);
    return css`
        background-image: url("${requireImageWithSize(sm)}");
        ${br.md} {
            background-image: url("${requireImageWithSize(md)}");
        }
        ${br.xl} {
            background-image: url("${requireImageWithSize(xl)}");
        }
    `;
};

const Container = styled(motion.main)<IWithPathStyled>`
    margin: 0 auto;
    max-width: 1440px;
    min-width: 375px;
    min-height: 100vh;
    width: 100%;
    flex: 1 0 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: bottom;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;

    background-color: ${theme.colors.primary.Dark};
    transition: background-image 0.5s ease-in-out 1.4s;
    ${({ $path }) => {
        /**
         * folder name : /destination
         * path name : destinations
         */
        let renderPath = $path === "destinations" ? $path.slice(0, -1) : $path;
        return path2backgroundImage(renderPath);
    }}
`;

export { Container };
