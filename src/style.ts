import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { theme } from "./style/theme";
import { IWithPathStyled } from "./types/global";
import { br } from "./utils/Device";

const path2backgroundImage = (path: string) => {
    let sm = "mobile";
    let md = "tablet";
    let xl = "desktop";

    const requireFileWithSize = (size: string) =>
        new URL(
            `./assets/${path}/background-${path}-${size}.jpg`,
            import.meta.url
        ).href;

    // require(`./assets/${path}/background-${path}-${size}.jpg`);
    return css`
        background-image: url("${requireFileWithSize(sm)}");
        ${br.md} {
            background-image: url("${requireFileWithSize(md)}");
        }
        ${br.xl} {
            background-image: url("${requireFileWithSize(xl)}");
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
        let renderPath: string;
        if (!$path) renderPath = "home";
        else if ($path === "destinations") {
            renderPath = $path.slice(0, -1);
        } else renderPath = $path;
        return path2backgroundImage(renderPath);
    }}
`;

export { Container };
