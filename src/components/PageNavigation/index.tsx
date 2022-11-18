import { LayoutGroup, motion } from "framer-motion";
import { Container, Indicator } from "./style";
import { itemVariants, indicatorVariants, LinkVarinats } from "./animate";
import routes from "../../routes";
import useNestedPath from "../../hooks/useNestedPath";
import { useState, useEffect } from "react";
import AnimationLink from "../AnimationLink";
import { IPageLayoutProps } from "../PageLayout/type";

type Props = Pick<IPageLayoutProps, "index">;

export default function PageNavigation({ index }: Props) {
    const paths = useNestedPath();
    // route with correct carousel order
    const [order, setOrder] = useState(() => {
        if (typeof paths === "undefined") return 0;
        // some path has space and it should be decode in plain text
        const decodePath = decodeURI(paths[paths.length - 1]);
        return routes[index].child.indexOf(decodePath);
    });

    // if not match any carousel number,just return 0
    useEffect(() => {
        if (order === -1) {
            setOrder(0);
        }
    }, [order]);

    if (typeof paths === "undefined") return null;
    return (
        <LayoutGroup id={paths[paths.length - 1] + "pageNavigation"}>
            <Container $path={routes[index].path}>
                {routes[index].child.map((name, i) => (
                    <motion.li
                        key={name}
                        variants={itemVariants[routes[index].path]}
                        custom={order === i}
                        initial={false}
                        animate="show"
                        whileHover="hover"
                    >
                        {/* now <Link> can be animate */}
                        <AnimationLink
                            variants={LinkVarinats[routes[index].path]}
                            custom={order === i}
                            to={"./" + decodeURI(name)}
                            onClick={() => setOrder(i)}
                        >
                            {/* destinations page show label name */}
                            {paths[1] === "destinations" && name}
                            {/* technology page show number */}
                            {paths[1] === "technology" && i + 1}
                            {/* page active under line animation */}
                            {order === i && (
                                <Indicator
                                    layoutId={
                                        routes[index].path +
                                        "pageNavigationIndicator"
                                    }
                                />
                            )}
                            {/* hover state */}
                            <Indicator
                                variants={indicatorVariants[routes[index].path]}
                            />
                        </AnimationLink>
                    </motion.li>
                ))}
            </Container>
        </LayoutGroup>
    );
}
