import { FlattenSimpleInterpolation } from "styled-components";
import useToggle from "../hooks/useToggle";
import { IRouteInfo } from "../routes/type";

/**
 * Object.entries types : return - key : [key,value]
 */
export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface IWithPathStyled {
    $path: string;
}
/**
 * site first visit /page transition
 */
export type TfirstVisit = boolean;

/**
 * navigation routes
 */
export type TRoutes = IRouteInfo["path"] | "home";

/**
 * useToggle return handleToggle
 * it should check handleToggle type
 */
export type TUseToggle = ReturnType<typeof useToggle>;

/**
 * styled different child route
 * {[key : route] : css``}
 */
export type TStyleVariants = {
    [key in IRouteInfo["path"]]: FlattenSimpleInterpolation;
};
