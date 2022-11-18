import { CSSProperties } from "react";
import { Variants } from "framer-motion";
import { IRouteInfo } from "../routes/type";

/**
 * define label name
 */
export type VariantsName =
    | "hidden"
    | "show"
    | "exit"
    | "tap"
    | "hover"
    | "drag";

/**
 * custom static label name Variants
 */
export type animationVariants =
    | Variants
    | Record<VariantsName, { [key: string]: CSSProperties }>;

/**
 * for route-animation variants
 */
export type IRoutesAnimationVariants = {
    [key in IRouteInfo["path"]]: animationVariants;
};
