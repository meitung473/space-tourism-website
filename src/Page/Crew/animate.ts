import { defaultOpacityAnim } from "../../animation";
import { combineAnim } from "../../animation/combineAnim";
import { animationVariants } from "../../types/animation";

export const H4Variants: animationVariants = combineAnim(defaultOpacityAnim, {
    hidden: {
        x: "-100%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 0.4,
        transition: {
            type: "tween",
            ease: "easeInOut",
            delay: 0.8,
            duration: 0.5,
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
    },
});
