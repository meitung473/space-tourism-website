import { combineAnim } from "../../animation/combineAnim";
import { animationVariants } from "../../types/animation";
export const wrapperAnim: animationVariants = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const imageAnim: animationVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
        },
    },
};

export const articleAnim = {
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
export const lineAnim: animationVariants = {
    hidden: (firstLoad) => ({
        scaleX: firstLoad ? 0 : 1,
    }),
    show: {
        scaleX: 1,
        transition: {
            duration: 1,
        },
    },
};
// subContent
export const subContentAnim: animationVariants = combineAnim(
    {},
    {
        hidden: (firstLoad) => ({
            x: firstLoad ? 10 : 0,
            opacity: firstLoad ? 0 : 1,
        }),
        show: {
            x: 0,
            opacity: 1,
        },
    }
);
