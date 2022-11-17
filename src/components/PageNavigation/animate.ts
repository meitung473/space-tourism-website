import { theme } from "../../style/theme";
import { IRoutesAnimationVariants } from "../../types/animation";

type TRouteAnimVariants = Partial<IRoutesAnimationVariants>;

export const itemVariants: TRouteAnimVariants = {
    destinations: {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1, color: "#fff" },
    },
    technology: {
        show: (active) => ({
            backgroundColor: active ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)",
        }),
    },
};

export const LinkVarinats: TRouteAnimVariants = {
    technology: {
        show: (active) => ({
            color: active
                ? theme.colors.primary.Dark
                : theme.colors.greyScale.black_0,
        }),
    },
};
export const indicatorVariants: TRouteAnimVariants = {
    destinations: {
        hidden: { opacity: 0, scale: 0 },
        hover: {
            scale: 1,
            opacity: 0.5,
        },
    },
    crew: {
        hidden: { opacity: 0, scale: 0 },
        hover: {
            scale: 1,
            opacity: 0.5,
            mixBlendMode: "normal",
        },
    },
    technology: {
        hover: {
            opacity: 0.5,
        },
    },
};
