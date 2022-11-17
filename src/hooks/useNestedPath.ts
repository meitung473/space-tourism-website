import { Location, useLocation } from "react-router-dom";
import { useMemo } from "react";

type TUseNestedPath = string[] | undefined;
/**
 * paths : ["", IRouteInfo["path"],IRouteInfo["child"]]
 * [<root>: "",<parent> : "/a", <child> : "/a/a1"]
 * @returns {}
 */
export default function useNestedPath(): TUseNestedPath {
    const { pathname }: Location = useLocation();
    const paths = useMemo(() => {
        let names = pathname.match(/^\/([^\\/]+)\/?(.*)$/)?.[0].split("/");
        return names;
    }, [location.pathname]);

    return paths;
}
