import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { theme } from "../../style/theme";
import { TStyleVariants } from "../../types/global";
import { br } from "../../utils/Device";
import { routeStyleVariants } from "../../utils/routeStyleVariants";
import { adjustAlpha } from "../../utils/themeMethod";

export const Indicator = styled(motion.span)`
    opacity: ${({ layoutId }) => (layoutId ? 1 : 0)};
`;

const styleVariants: TStyleVariants = {
    destinations: css`
        justify-content: center;

        ${br.xl} {
            justify-content: flex-start;
            grid-row: 1 / 1;
        }
        a {
            display: inline-block;
            position: relative;
            font-family: "Barlow Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
            letter-spacing: 2.3625px;
        }
        li {
            display: flex;
            justify-content: center;
            padding: 12px 8px;
            ${br.xl} {
                flex: 0 1 auto;
                justify-content: flex-start;
            }
        }
        ${Indicator} {
            position: absolute;
            display: inline-block;
            bottom: -12px;
            left: 20%;
            right: 20%;
            height: 3px;
            background-color: #fff;
            ${br.md} {
                left: 0%;
                right: 0%;
            }
        }
    `,
    crew: css`
        justify-self: center;
        grid-row: 1 / 1;
        ${br.md} {
            align-self: center;
            grid-row: 2 / 2;
        }
        ${br.xl} {
            justify-self: flex-start;
        }
        li {
            height: 10px;
            width: 10px;
            background-color: ${adjustAlpha(
                theme.colors.greyScale.black_0,
                0.17
            )};
            border-radius: 50%;
            display: flex;
            position: relative;
            ${br.md} {
                height: 10px;
                width: 10px;
            }
            ${br.xl} {
                height: 15px;
                width: 15px;
            }
        }
        ${Indicator} {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            border-radius: 50%;
        }
    `,
    technology: css`
        justify-content: center;
        ${br.xl} {
            grid-row: 1 / 1;
            grid-column: 1 / 1;
            flex-direction: column;
        }
        a {
            display: inline-block;
            font-family: "Bellefair";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
            letter-spacing: 1px;
            ${br.md} {
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 1.5px;
            }
            ${br.xl} {
                font-weight: 400;
                font-size: 32px;
                letter-spacing: 2px;
                width: 100%;
            }
        }
        li {
            display: flex;
            justify-content: center;
            width: clamp(2.5rem, 1.6197rem + 3.7559vw, 5rem);
            height: clamp(2.5rem, 1.6197rem + 3.7559vw, 5rem);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
            position: relative;
            align-items: center;
            border-radius: 50%;

            ${br.xl} {
                align-items: center;
                justify-content: flex-start;
            }
        }
        ${Indicator} {
            position: absolute;
            display: inline-block;
            border-radius: 50%;
            box-shadow: 0 0 0 1px #fff;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    `,
};
export const Container = styled.ul`
    display: flex;
    gap: 1.25em;
    ${routeStyleVariants(styleVariants)};
`;
