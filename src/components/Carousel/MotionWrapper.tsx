import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { withOutletContainer } from "../../HOC";
import { TStyleVariants } from "../../types/global";
import { br } from "../../utils/Device";
import { routeStyleVariants } from "../../utils/routeStyleVariants";

const styleVariant: TStyleVariants = {
    destinations: css`
        grid-template-columns: repeat(2, 1fr);
        column-gap: 5rem;
        align-self: stretch;
        padding: 2rem clamp(1.5rem, -1.9331rem + 14.6479vw, 11.25rem);
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        ${br.md} {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr;
        }
        ${br.xl} {
            align-self: center;
            grid-template-rows: 1fr;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 5rem;
        }
    `,
    crew: css`
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem clamp(1.5rem, -1.9331rem + 14.6479vw, 11.25rem);
        ${br.md} {
            grid-template-rows: min-content 1fr;
            align-self: stretch;
            padding: 5rem clamp(1.5rem, -1.9331rem + 14.6479vw, 11.25rem) 0;
        }
        ${br.xl} {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            padding: 2rem clamp(1.5rem, -1.9331rem + 14.6479vw, 11.25rem) 0;
        }
    `,
    technology: css`
        grid-template-rows: clamp(10.625rem, 7.544rem + 13.1455vw, 19.375rem) min-content 1fr;
        margin-top: 2rem;
        gap: clamp(2rem, 0.9437rem + 4.507vw, 5rem);
        ${br.md} {
            grid-template-rows: repeat(3, min-content);
            align-self: stretch;
            padding: 0;
            margin-top: 3.75rem;
        }
        ${br.xl} {
            align-self: start;
            grid-template-columns: min-content 1fr clamp(
                    18.75rem,
                    13.7544rem + 21.3146vw,
                    32.9375rem
                );
            grid-template-rows: 1fr;
            padding: 2rem 0 2rem clamp(0rem, -3.6312rem + 15.493vw, 10.3125rem);
            margin-top: 0;
        }
    `,
};

const Wrapper = styled(motion.article)`
    display: grid;
    ${routeStyleVariants(styleVariant)};
`;

const MotionWrapper = withOutletContainer(Wrapper);

export default MotionWrapper;
