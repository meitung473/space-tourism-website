import data from "../data/data.json";
import { TPath2Content } from "../types/model";

/**
 * data.json static file all types
 */
export type TData = typeof data;

export interface IRouteInfo {
    path: keyof TData;
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
