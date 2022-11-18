import { motion, MotionProps } from "framer-motion";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

/**
 * custom component can be wrapped and turn into a motion component
 */
const ForwardedLink = React.forwardRef<
    HTMLAnchorElement,
    Props & MotionProps & LinkProps
>((props, ref) => {
    const { children, ...restProps } = props;
    return (
        <Link ref={ref} {...restProps}>
            {children}
        </Link>
    );
});
const MotionLink = motion(ForwardedLink);

export default MotionLink;
