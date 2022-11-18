import React from "react";
import { PageTransitionProps } from "../components/PageTransition/type";
import PageTransition from "./../components/PageTransition/index";

type Props = {
    children?: React.ReactNode;
} & PageTransitionProps;

export default function PageWrapper({ children, firstVisit }: Props) {
    return (
        <>
            <PageTransition firstVisit={firstVisit} />
            {children}
        </>
    );
}
