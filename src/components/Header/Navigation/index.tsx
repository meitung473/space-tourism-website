import { LayoutGroup } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, List, Item, Indicator } from "./style";
import { navVariants, itemsVariants, indicatorVariants } from "./animate";
import useNestedPath from "../../../hooks/useNestedPath";
import routes from "../../../routes";
import MotionLink from "../../AnimationLink";
import { emptyVariants } from "../../../animation";
import { TUseToggle } from "../../../types/global";

const links = ["home", ...routes.map((route) => route.path)];
type Props = Pick<TUseToggle, "handleToggle">;

export default function Navigation({ handleToggle }: Props) {
    const paths = useNestedPath();
    const navigate = useNavigate();
    useEffect(() => {
        if (typeof paths === "undefined") navigate("/home");
    }, []);
    return (
        <Nav variants={navVariants} animate="show" initial="hidden" exit="exit">
            <List>
                {links.map((link, i) => {
                    let activePath: string;
                    if (typeof paths === "undefined") {
                        activePath = "home";
                    } else {
                        activePath = paths[1] === "" ? "home" : paths[1];
                    }
                    return (
                        <Item
                            key={link}
                            variants={itemsVariants}
                            onClick={() => {
                                if (activePath === link) return;
                                handleToggle(false)();
                                navigate(`/${link}`);
                            }}
                        >
                            <LayoutGroup id="headerNavigation">
                                <MotionLink
                                    to={link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    variants={emptyVariants}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit"
                                    whileHover="hover"
                                >
                                    <span>
                                        {Math.floor(i / 10)}
                                        {i % 10}
                                    </span>
                                    <span>{link}</span>
                                    {activePath === link && (
                                        <Indicator layoutId="NavigationIndicator" />
                                    )}
                                    {/* hover start */}
                                    <Indicator variants={indicatorVariants} />
                                </MotionLink>
                            </LayoutGroup>
                        </Item>
                    );
                })}
            </List>
        </Nav>
    );
}
