import { theme } from "./style/theme";
import { Container } from "./style";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import { Header, PageLayout } from "./components";
import { Home } from "./Page";
import BaseStyle from "./style/BaseStyle";
import useNestedPath from "./hooks/useNestedPath";
import { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import PageWrapper from "./Page/PageWrapper";
import { TfirstVisit } from "./types/global";

export default function SpaceWebsite() {
    const location = useLocation();
    const paths = useNestedPath();
    const firstVisit = useRef<TfirstVisit>(true);
    /**
     * child routes outlet not render at first visit
     * it would match next render
     * to do this, I check if the first visit in app
     * and after render false firstVisit.current.
     * in <PageLayout/> after first render will navigate to correct path
     * I am not sure of a correct way, but it really solve my problem
     *
     * the origin flow is :
     * /crew/* => F5 refresh => only show layout without content <Outlet/>
     *
     * new is :
     * /crew/* => F5 refresh => check is first time and in nested route
     * => force to re-render navigate to match route
     *
     *
     * @see  : https://reactrouter.com/en/main/start/concepts#outlets
     * and checkout components/PageLayout.tsx
     */
    useEffect(() => {
        firstVisit.current = false;
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <BaseStyle />
            <Container $path={paths?.[1] ?? "home"}>
                <Header />
                <AnimatePresence mode="wait" custom={firstVisit.current}>
                    <Routes key={paths?.[1] ?? "home"} location={location}>
                        <Route path="*" element={<Navigate to="/home" />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route
                            index
                            element={
                                <PageWrapper firstVisit={firstVisit.current}>
                                    <Home />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="home"
                            element={
                                <PageWrapper firstVisit={firstVisit.current}>
                                    <Home />
                                </PageWrapper>
                            }
                        />
                        {routes.map((route, index) => {
                            return (
                                <Route
                                    key={location.pathname}
                                    path={`/${route.path}/*`}
                                    element={
                                        <PageWrapper>
                                            <PageLayout
                                                index={index}
                                                title={route.title}
                                                firstVisit={firstVisit.current}
                                            />
                                        </PageWrapper>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </AnimatePresence>
            </Container>
        </ThemeProvider>
    );
}
