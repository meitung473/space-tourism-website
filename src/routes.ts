import { lazy } from "react";
import data from "./data/data.json";
import { Entries, IRouteInfo, TData } from "./types/global";

const title = ["Pick your destination", "Meet your crew", "Space launch 101"];

const routes = (Object.entries(data) as Entries<TData>).reduce(
    (paths, [path], index) => {
        // correspond with folder name, first letter is Uppercase
        let relativePath = path.charAt(0).toUpperCase() + path.slice(1);
        paths.push({
            path: path,
            title: title[index],
            component: lazy(() => import(`./Page/${relativePath}`)),
            carousel: lazy(() => import(`./Page/${relativePath}/Carousel`)),
            child: data[path].map((route) => route.name),
        });
        return paths;
    },
    [] as IRouteInfo[]
);

export default routes;
