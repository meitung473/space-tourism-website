import { animationVariants } from "../../types/animation";

export const PageVariants: animationVariants = {
    show: {
        transition: {
            staggerChildren: 0.4,
            staggerDelay: 1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.4,
            staggerDelay: 1,
            staggerDirection: -1,
        },
    },
};
