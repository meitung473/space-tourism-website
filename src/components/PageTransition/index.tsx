import { motion } from "framer-motion";
import Logo from "../../assets/shared/logo.svg";
import { loadIconVariants, overlayVariants } from "./animate";
import { Wrapper } from "./style";

export default function PageTransition() {
    return (
        <Wrapper
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.img
                src={Logo}
                alt="loading-icon"
                variants={loadIconVariants}
            />
        </Wrapper>
    );
}
