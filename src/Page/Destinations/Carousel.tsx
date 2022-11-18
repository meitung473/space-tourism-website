import { SubContent as SubContentStyle } from "./style";
import { articleAnim } from "./animate";
import { motion } from "framer-motion";
import { importImage } from "../../utils/importImage";
import MotionText from "../../components/AnimationText/index";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";

import { TPath2Content } from "../../types/model";
import { CarouselLayoutProps } from "../../components/Carousel/CarouselContextPage";

type TContentType = TPath2Content["destinations"];

function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return null;
    const { name, description } = content as TContentType;
    return (
        <Content>
            <MotionText textType="h2" words={name} />
            <motion.p variants={articleAnim}>{description}</motion.p>
        </Content>
    );
}

function SubContent() {
    const { type, content } = useCarouselContext();
    if (type !== "subContent") return null;
    const { distance, travel } = content as TContentType;
    return (
        <>
            {[distance, travel].map((info) => (
                <MotionText
                    key={info}
                    textType={SubContentStyle}
                    words={info}
                    splitText={" "}
                />
            ))}
        </>
    );
}
function Image() {
    const { type, content } = useCarouselContext();
    const { images, name } = content as TContentType;

    if (type !== "image") return null;

    return (
        <ImageStyle
            name={name}
            defaultSrc={
                new URL(
                    `../../assets/${importImage(images.png)}`,
                    import.meta.url
                ).href
            }
        >
            <source
                srcSet={
                    new URL(
                        `../../assets/${importImage(images.webp)}`,
                        import.meta.url
                    ).href
                }
                type="image/webp"
            />
        </ImageStyle>
    );
}

const Carousel = (props: CarouselLayoutProps) => {
    return (
        <CarouselLayout {...props}>
            <Main />
            <SubContent />
            <Image />
        </CarouselLayout>
    );
};

export default Carousel;
