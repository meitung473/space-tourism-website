import { animationVariants } from "../types/animation";
import { Variant, Variants } from "framer-motion";

// /**
//  * input animations should be unique css property
//  * @param  {animationVariants[]} args
//  * @returns {animationVariants}
//  */

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
    }, {} as Record<string, Variant>);
}
// {[key in keyof animationVariants]: animationVariants[key] }
