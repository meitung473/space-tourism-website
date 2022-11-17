import { animationVariants } from "../../types/animation";

export const wordVariants: animationVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 30,
        opacity: 0,
    },
};
