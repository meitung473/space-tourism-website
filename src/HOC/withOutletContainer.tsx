import React from "react";
import useNestedPath from "../hooks/useNestedPath";
import getDisplayName from "../utils/getDisplayName";

export interface IWithOutletContainerProps<T> {
    content: T;
}
interface Props {
    children?: React.ReactNode;
}

// for carousel content need to position with portal (HTML)
export default function withOutletContainer<
    T,
    P extends Partial<IWithOutletContainerProps<T>> & Props
>(CoreComponent: React.ComponentType<T>) {
    const Wrapper = React.forwardRef<React.Ref<T>, P>((props, ref) => {
        const { children, ...restProp } = props;
        const paths = useNestedPath();
        if (typeof paths === "undefined") return null;
        return (
            <CoreComponent $path={paths[1]} ref={ref} {...(restProp as T)}>
                {children}
            </CoreComponent>
        );
    });
    Wrapper.displayName = `withOutletContainer(${getDisplayName(
        CoreComponent
    )})`;
    return Wrapper;
}
