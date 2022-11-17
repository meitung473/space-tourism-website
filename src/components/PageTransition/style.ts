import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../style/theme";

export const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    transform-origin: bottom center;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary.Dark};
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
