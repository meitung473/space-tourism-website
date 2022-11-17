import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    contentVariants,
    articleVariants,
    wrapperVariants,
    exploreVariant,
} from "./animate";
import { Wrapper, ContentBox, ActionBox } from "./style";
import { AnimationText } from "../../components";
import useNestedPath from "../../hooks/useNestedPath";

export default function Home() {
    const paths = useNestedPath();
    return (
        <Wrapper
            variants={wrapperVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <ContentBox variants={contentVariants}>
                <motion.h5 variants={articleVariants}>
                    SO, YOU WANT TO TRAVEL TO
                </motion.h5>
                <AnimationText words="SPACE" textType="h1" />
                <motion.p variants={articleVariants}>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </motion.p>
            </ContentBox>
            <ActionBox>
                <Link
                    to={paths?.[1] ? "../destinations" : "./destinations"}
                    replace={true}
                >
                    <motion.h4
                        variants={exploreVariant}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        exit="exit"
                        whileTap="tap"
                    >
                        EXPLORE
                    </motion.h4>
                </Link>
            </ActionBox>
        </Wrapper>
    );
}
