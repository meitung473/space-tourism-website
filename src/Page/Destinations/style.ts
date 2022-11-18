import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../style/theme";
import { br } from "../../utils/Device";

const Line = styled(motion.hr)`
    border-width: 0.4px;
    border-color: ${theme.colors.primary.Tint};
    transform-origin: left center;
    ${br.xl} {
        grid-row: 3 / 3;
    }
`;
// Distance / Travel Time text
const Info = styled(motion.div)`
    flex: 1 1 auto;
    display: grid;
    grid-row: 5 / 5;
    gap: 12px;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content 1fr;
    h6:nth-child(3) {
        grid-row: 2/2;
    }
    justify-items: center;
    ${br.md} {
        h6:nth-child(3) {
            grid-row: unset;
        }
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: min-content 1fr;
        grid-row: 5 / 5;
    }
    ${br.xl} {
        align-items: start;
        justify-items: start;
    }
`;
const SubContent = styled(motion.h6)`
    font-family: "Bellefair";
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #ffffff;
    display: block;
`;
const SubHeading = styled(motion.h6)`
    font-family: "Barlow Condensed";
    line-height: 1.063rem;
    letter-spacing: 0.148rem;
    font-weight: 400;
    font-size: clamp(0.75rem, 0.706rem + 0.1878vw, 0.875rem);
    text-transform: uppercase;
    color: ${theme.colors.primary.Default};
`;
export { SubHeading, SubContent, Info, Line };
