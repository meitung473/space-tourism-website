import importImage from "../../utils/importImage";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";
import MotionText from "../../components/AnimationText/index";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { defaultArticleAnim } from "../../animation";
import { breakpointSizes } from "../../utils/Device";
import { TPath2Content } from "../../types/model";

type TContentType = TPath2Content["technology"];

function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return null;
    const { name, description } = content as TContentType;
    return (
        <Content>
            <MotionText textType="h3" words={name} splitText={" "} />
            <motion.p variants={defaultArticleAnim}>{description}</motion.p>
        </Content>
    );
}

function Image() {
    const { type, content } = useCarouselContext();
    const { images, name } = content as TContentType;
    const defaultSrc = useMemo(
        () =>
            new URL(
                "../../assets/" + importImage(images.portrait),
                import.meta.url
            ).href,

        [images.portrait]
    );
    if (type !== "image") return null;

    return (
        <ImageStyle name={name} defaultSrc={defaultSrc}>
            <source
                srcSet={
                    new URL(
                        "../../assets/" + importImage(images.landscape),
                        import.meta.url
                    ).href
                }
                type="image/jpg"
                media={`(max-width:${breakpointSizes.xl}px)`}
            />
        </ImageStyle>
    );
}

function Carousel(props: React.ComponentProps<typeof CarouselLayout>) {
    return (
        <CarouselLayout {...props}>
            <Main />
            <Image />
        </CarouselLayout>
    );
}

export default Carousel;
