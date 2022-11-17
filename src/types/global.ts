import { FlattenSimpleInterpolation } from "styled-components";
import data from "../data/data.json";
import useToggle from "../hooks/useToggle";
import { TPath2Content } from "./model";

/**
 * Object.entries types : return - key : [key,value]
 */
export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

/**
 * data.json static file all types
 */
export type TData = typeof data;

export interface IRouteInfo {
    path: keyof typeof data;
    title: string;
    /**
     * child route layout component - eg.Crew/index
     */
    component: React.FunctionComponent<{
        navigation: React.ReactNode;
        firstLoad: React.Ref<boolean>;
    }>;
    /**
     * child route carousel component - eg.Crew/Carousel
     */
    carousel: React.FunctionComponent<{
        content: TPath2Content[keyof TData];
    }>;
    /**
     * child routes of each page
     */
    child: Array<string>;
}

export interface IWithPathStyled {
    $path: string;
}

export type TRoutes = IRouteInfo["path"] | "home";

export interface ILayoutComponentProps {
    navigation: React.ReactNode;
}

/**
 * useToggle return handleToggle
 * it should check handleToggle type
 */
export type TUseToggle = ReturnType<typeof useToggle>;

export type TStyleVariants = {
    [key in IRouteInfo["path"]]: FlattenSimpleInterpolation;
};
