import { motion } from "framer-motion";
import Logo from "../../assets/shared/logo.svg";
import { loadIconVariants, overlayVariants } from "./animate";
import { Wrapper } from "./style";
import { PageTransitionProps } from "./type";

export default function PageTransition({ firstVisit }: PageTransitionProps) {
    return (
        <Wrapper
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            custom={firstVisit}
        >
            <motion.img
                src={Logo}
                alt="loading-icon"
                variants={loadIconVariants}
            />
        </Wrapper>
    );
}
