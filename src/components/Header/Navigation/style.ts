import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { br } from "../../../utils/Device";
import { adjustAlpha } from "../../../utils/themeMethod";

const Nav = styled(motion.nav)`
    display: flex;
    background: ${adjustAlpha(theme.colors.greyScale.black_1000, 0.04)};
    backdrop-filter: blur(40.7742px);
    margin-left: auto;
    flex: 0 1 60%;
    padding-left: 32px;
    margin-left: auto;
    position: relative;
    height: 100%;
    ${br.md} {
        flex: 0 1 auto;
    }
    ${br.xl} {
        flex: 0 1 60%;
    }
`;
const List = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100vh;
    padding-top: 80px;
    flex-grow: 1;
    ${br.md} {
        flex-direction: row;
        height: auto;
        width: 100%;
        justify-content: flex-end;
        margin: 0 48px;
        padding-top: 0;
    }
    ${br.xl} {
        justify-content: center;
        margin-right: 165px;
    }
`;
const Item = styled(motion.li)`
    padding: 6px 0;
    position: relative;
    ${br.md} {
        padding: 0;
        justify-content: center;
        align-items: stretch;
    }
    a {
        display: inline-block;
        font-family: "Barlow Condensed";
        line-height: 19px;
        letter-spacing: 2.7px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        display: flex;
        gap: 14px;
        ${br.md} {
            position: relative;
            gap: 14px;
            padding: 40px 0;
        }
    }

    span:nth-child(1) {
        font-weight: 700;
    }
`;
const Indicator = styled(motion.span)`
    position: absolute;
    display: inline-block;
    background: #fff;
    top: 0;
    bottom: 0;
    right: 0;
    width: 4px;
    transform-origin: left center;
    ${br.md} {
        top: unset;
        width: 100%;
        height: 4px;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;
export { Nav, List, Item, Indicator };
