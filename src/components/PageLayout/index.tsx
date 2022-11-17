import { Suspense, useMemo, useEffect, useRef } from "react";
import PageNavigation from "../PageNavigation";
import {
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
} from "react-router-dom";
import data from "../../data/data.json";
import { Wrapper, Number, Title } from "./style";
import routes from "../../routes";
import useNestedPath from "../../hooks/useNestedPath";
import { PageVariants } from "./animate";
import { AnimatePresence } from "framer-motion";
import RotateLoader from "react-spinners/RotateLoader";
import { theme } from "../../style/theme";
import { ICarouselContext } from "../Carousel/CarouselContextPage";

export interface IPageLayoutProps {
    index: number;
    title: typeof routes[number]["title"];
    firstVisit: boolean;
}

export default function PageLayout({
    index,
    title,
    firstVisit,
}: IPageLayoutProps) {
    const paths = useNestedPath();
    const location = useLocation();
    const navigate = useNavigate();
    const firstLoadPage = useRef(true);
    /**
     * in the same child route : /crew/* , /destinations/*, /technology/*
     * shared the same origin layout
     */
    const Component = useMemo(() => {
        return {
            Layout: routes[index].component,
            Carousel: routes[index].carousel,
        };
    }, [index]);

    /**
     * if user enter nested route at first or refreshing page
     * <Outlet/> not render anything QQ
     * I navigate to correct path at the first visit.
     *
     * Let's remove it, you will see the difference
     */
    useEffect(() => {
        if (typeof paths === "undefined") {
            navigate("/home");
            return;
        }

        if (paths[2] && firstVisit) {
            navigate(decodeURI(paths[2]));
        }
    }, [firstVisit, navigate, paths]);

    useEffect(() => {
        firstLoadPage.current = false;
    }, []);
    if (typeof paths === "undefined") return null;
    return (
        <Wrapper
            variants={PageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            $path={paths[1]}
        >
            {/* for route change : crew => destination, it will animate page transition */}
            <Title>
                <Number>
                    {Math.floor((index + 1) / 10)}
                    {(index + 1) % 10}
                </Number>
                {title}
            </Title>

            <AnimatePresence mode="wait">
                <Suspense
                    key={paths[2]}
                    fallback={
                        <RotateLoader color={theme.colors.primary.Default} />
                    }
                >
                    <Routes key={paths[2]} location={location}>
                        {/* Not Found/Match */}
                        <Route
                            key={location.key}
                            path="*"
                            element={
                                <Navigate
                                    to={`/${routes[index].path}/${encodeURI(
                                        routes[index].child[0]
                                    )}`}
                                />
                            }
                        />
                        <Route
                            key={location.key}
                            path="/"
                            element={
                                <Component.Layout
                                    navigation={
                                        <PageNavigation index={index} />
                                    }
                                    firstLoad={firstLoadPage}
                                />
                            }
                        >
                            <Route
                                index
                                element={
                                    <Component.Carousel
                                        content={data[routes[index].path][0]}
                                    />
                                }
                            />

                            {data[routes[index].path].map(
                                (current: ICarouselContext["content"]) => {
                                    return (
                                        <Route
                                            key={location.key}
                                            path={current.name}
                                            element={
                                                <Component.Carousel
                                                    content={current}
                                                />
                                            }
                                        />
                                    );
                                }
                            )}
                        </Route>
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </Wrapper>
    );
}
