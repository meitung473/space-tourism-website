import importImage from "../../utils/importImage";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";
import MotionText from "../../components/AnimationText";
import { withOutletContainer } from "../../HOC";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { defaultArticleAnim } from "../../animation";
import { TPath2Content } from "../../types/model";
import { CarouselLayoutProps } from "../../components/Carousel/CarouselContextPage";
import { H4Variants } from "./animate";

type TContentType = TPath2Content["crew"];

function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return null;
    const { role, name, bio } = content as TContentType;
    return (
        <Content>
            <motion.h4 variants={H4Variants}>{role}</motion.h4>
            <MotionText textType={"h3"} words={name} splitText={" "} />
            <motion.p variants={defaultArticleAnim}>{bio}</motion.p>
        </Content>
    );
}

function Image() {
    const { type, content } = useCarouselContext();
    const { images, name } = content as TContentType;
    const defaultSrc = useMemo(
        () =>
            new URL("../../assets/" + importImage(images.png), import.meta.url)
                .href,
        [images.png]
    );
    if (type !== "image") return null;
    return (
        <ImageStyle name={name} defaultSrc={defaultSrc}>
            <source
                srcSet={
                    new URL(
                        "../../assets/" + importImage(images.webp),
                        import.meta.url
                    ).href
                }
                type="image/webp"
            />
        </ImageStyle>
    );
}

const CarouselWrapper = (props: CarouselLayoutProps) => {
    return (
        <CarouselLayout {...props}>
            <Main />
            <Image />
        </CarouselLayout>
    );
};
const Carousel = withOutletContainer(CarouselWrapper);
export default Carousel;
