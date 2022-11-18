import React, { useMemo, createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { TData } from "../../routes/type";
import { TPath2Content } from "../../types/model";

export interface ICarouselContext {
    type: string;
    content: TPath2Content[`${keyof TData}`];
}

const CarouselContext = createContext<ICarouselContext | undefined>(undefined);

export interface CarouselLayoutProps extends ICarouselContext {
    children?: React.ReactNode;
}

export function useCarouselContext() {
    const context = useContext(CarouselContext);
    if (context === undefined) throw Error("no Carousel Provider on the top.");
    return context;
}

export function CarouselLayout({ content, children }: CarouselLayoutProps) {
    const type: string = useOutletContext();
    const value = useMemo(() => {
        return {
            content,
            type,
        };
    }, [content, type]);
    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
}
