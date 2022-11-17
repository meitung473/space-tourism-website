import { animationVariants } from "../../types/animation";

export const overlayVariants: animationVariants = {
    hidden: {
        scaleX: 1,
        transformOrigin: "left center",
    },
    show: {
        scaleX: 0,
        transition: {
            delay: 0.6,
            duration: 1,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            when: "afterChildren",
        },
    },
    exit: {
        scaleX: [1, 1],
        scaleY: [0, 1],
        transformOrigin: "bottom center",
        transition: {
            delay: 0.4,
            duration: 1,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export const loadIconVariants: animationVariants = {
    hidden: {
        y: "100vh",
        scale: 0,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: [0, 360],
        transition: {
            duration: 1,
            repeat: 1,
            repeatType: "mirror",
            y: {
                duration: 0.6,
            },
            rotate: {
                delay: 0.6,
                duration: 0.4,
            },
            opacity: {
                duration: 0.6,
            },
        },
        transitionEnd: {
            opacity: 0,
        },
    },
};
