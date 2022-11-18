import { animationVariants } from "../types/animation";
import { combineAnim } from "./combineAnim";

export const defaultScaleAnim: animationVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
    },
    exit: {
        scale: 0,
    },
};
export const defaultOpacityAnim: animationVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};
export const defaultArticleAnim: animationVariants = {
    show: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
    exit: {
        opacity: 0,
        y: 20,
    },
};

export const scaleAndOpacityAnim = combineAnim(
    defaultOpacityAnim,
    defaultScaleAnim
);

export const contentWrapperAnim: animationVariants = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/**
 * only for wrapper element propagation
 */
export const emptyVariants: animationVariants = {};
