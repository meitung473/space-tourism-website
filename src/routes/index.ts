import { lazy } from "react";
import data from "../data/data.json";
import { Entries } from "../types/global";
import { IRouteInfo, TData } from "./type";

const title = ["Pick your destination", "Meet your crew", "Space launch 101"];

const routes = (Object.entries(data) as Entries<TData>).reduce(
    (paths, [path], index) => {
        // correspond with folder name, first letter is Uppercase
        let relativePath = path.charAt(0).toUpperCase() + path.slice(1);
        paths.push({
            path: path,
            title: title[index],
            component: lazy(() => import(`../Page/${relativePath}/index.tsx`)),
            carousel: lazy(
                () => import(`../Page/${relativePath}/Carousel.tsx`)
            ),
            child: data[path].map((route) => route.name),
        });
        return paths;
    },
    [] as IRouteInfo[]
);

export default routes;
