import { Variants } from "framer-motion";
import { animationVariants } from "../types/animation";

/**
 * combine different default animation
 * 
 * Note: the after one's CSS properties would override the above
 * 
 * @param {Variants[]} args
 * @returns {animationVariants} animation combine inputs with unique CSS properties
 */
export function combineAnim(...args: Variants[]) {
    return args.reduce((newAnim: Variants, anim: Variants) => {
        for (let key in anim) {
            if (!newAnim[key]) {
                newAnim[key] = { ...anim[key] };
            } else {
                newAnim[key] = { ...newAnim[key], ...anim[key] };
            }
        }

        return newAnim;
    }, {} as animationVariants);
}
