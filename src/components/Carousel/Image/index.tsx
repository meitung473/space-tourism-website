import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useNestedPath from "../../../hooks/useNestedPath";
import { Wrapper } from "./style";
import { loadingVariants, imageVariants } from "./animate";

interface IImageProps {
    name: string;
    defaultSrc: string;
    children?: React.ReactNode;
}

const Image = ({ name, defaultSrc, children }: IImageProps) => {
    const [loadingImage, setLoadingImage] = useState<boolean>(true);
    const [flashing, setFlashing] = useState<boolean>(true);

    const paths = useNestedPath();

    useEffect(() => {
        if (loadingImage) return;
        setTimeout(() => {
            setFlashing(false);
        }, 500);
    }, [loadingImage]);

    if (typeof paths === "undefined") return null;
    return (
        <Wrapper
            $path={paths[1]}
            variants={loadingVariants}
            custom={flashing}
            animate={loadingImage ? "loading" : "static"}
        >
            <picture>
                {children}
                <motion.img
                    key={name}
                    src={defaultSrc}
                    alt={name}
                    style={{
                        transformOrigin: "bottom center",
                    }}
                    variants={imageVariants}
                    animate="show"
                    initial="hidden"
                    exit="exit"
                    custom={loadingImage}
                    onLoad={() => {
                        setLoadingImage(false);
                    }}
                />
            </picture>
        </Wrapper>
    );
};

export default Image;
