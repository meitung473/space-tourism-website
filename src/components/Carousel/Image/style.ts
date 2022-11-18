import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { TStyleVariants } from "../../../types/global";
import { br } from "../../../utils/Device";
import { routeStyleVariants } from "../../../utils/routeStyleVariants";

const styleVariants: TStyleVariants = {
    destinations: css`
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;
        align-self: center;
        justify-self: center;
        order: -1;
        width: clamp(10.625rem, 4.463rem + 26.2911vw, 28.125rem);
        border-radius: 50%;
        img {
            aspect-ratio: 1 / 1;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
        }
        ${br.md} {
            grid-row: 1 / 1;
        }
        ${br.xl} {
            grid-area: 1 / 1 / 1 / 1;
        }
    `,
    crew: css`
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-self: end;
        box-shadow: 0 1px 0 0 hsla(231, 15%, 26%, 1);
        transform-origin: bottom center;
        background-image: ${br.md} {
            grid-row: 2 / 2;
            box-shadow: unset;
        }
        ${br.xl} {
            grid-row: 1 / 1;
            grid-column: 2 / 2;
        }

        img {
            max-width: 100%;
            vertical-align: bottom;
            object-fit: contain;
            height: 50vw;
            ${br.md} {
                grid-row: 2 / 2;
                height: 50vh;
            }
            ${br.xl} {
                height: 65vh;
            }
        }
    `,
    technology: css`
        grid-row: 1 / 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        ${br.xl} {
            grid-row: unset;
            grid-column: 3 / 3;
            justify-content: flex-end;
            justify-self: end;
        }
        ${br.xxl} {
            width: 100%;
            height: 100%;
        }
        picture {
            width: 100%;
        }
        img {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            ${br.md} {
                object-fit: contain;
                object-position: center;
            }
        }
    `,
};

export const Wrapper = styled(motion.figure)`
    ${routeStyleVariants(styleVariants)}

    image {
        display: block;
        font-size: 0;
        line-height: 0;
        margin-left: auto;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
`;
