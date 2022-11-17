import { animationVariants } from "../types/animation";

export const EMPTYVARIANTS: animationVariants = {};
export const SCALEANDFADE: animationVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0,
    },
};
