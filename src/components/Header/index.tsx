import { AnimatePresence } from "framer-motion";
import OverlayComponent from "../OverlayComponent";
import Navigation from "./Navigation";
import { Container, Line } from "./style";
import { Logo, Hamburger } from "./components";
import { br } from "../../utils/Device";
import { useMediaQuery } from "../../hooks/useMediaqurey";
import useToggle from "../../hooks/useToggle";

export default function Header() {
    const { toggle, handleToggle } = useToggle(false);
    const isMd = useMediaQuery(br.md);

    return (
        <Container>
            <Logo />
            <Line />
            {!isMd && <Hamburger handleToggle={handleToggle} toggle={toggle} />}
            <AnimatePresence initial={false} mode="wait">
                {!isMd && toggle && (
                    <OverlayComponent overlay={false}>
                        <Navigation handleToggle={handleToggle} />
                    </OverlayComponent>
                )}
            </AnimatePresence>
            {isMd && <Navigation handleToggle={handleToggle} />}
        </Container>
    );
}
