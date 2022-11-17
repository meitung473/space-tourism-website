import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import useNestedPath from "../../hooks/useNestedPath";
import { contentWrapperAnim } from "../../animation";
import { br } from "../../utils/Device";

import { routeStyleVariants } from "./../../utils/routeStyleVariants";

type Props = {
    children?: React.ReactNode;
};
const styleVariants = {
    destinations: css`
        grid-row: 2 / 4;
        h2 {
            color: #fff;
        }
        p {
            text-align: center;
        }
        ${br.md} {
            grid-row: 2 / 4;
            height: 15rem;
        }
        ${br.xl} {
            grid-row: 2 / 2;
            height: 14.5rem;
            display: flex;
            justify-content: center;
            p {
                text-align: left;
            }
        }
    `,
    crew: css`
        gap: 1rem;
        h3,
        h4,
        p {
            text-align: center;
        }

        ${br.xl} {
            h3,
            h4,
            p {
                text-align: left;
            }
            p {
                min-height: 10rem;
            }
        }
    `,
    technology: css`
        padding: 0 1.5rem 2rem;
        row-gap: 0.5rem;
        ${br.md} {
            padding: 0 10rem 2rem;
            gap: 1rem;
        }
        ${br.xl} {
            padding: 0;
            grid-column: 2 / 2;
            h3,
            p {
                text-align: left;
            }
            p {
                min-height: 14rem;
            }
        }
    `,
};

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    ${routeStyleVariants(styleVariants)}
`;

const Content = ({ children }: Props) => {
    const paths = useNestedPath();
    if (typeof paths === "undefined") return null;
    return (
        <Wrapper
            $path={paths[1]}
            variants={contentWrapperAnim}
            exit="exit"
            initial="hidden"
            animate="show"
        >
            {children}
        </Wrapper>
    );
};

export default Content;
