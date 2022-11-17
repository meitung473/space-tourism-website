import { createGrayScale } from "../utils/themeMethod";

export const theme = {
    colors: {
        primary: {
            Tint: "hsla(0, 0%, 100%, 1)",
            Default: "hsla(231, 77%, 90%, 1)",
            Dark: "hsla(230, 35%, 7%, 1)",
        },
        greyScale: createGrayScale(10),
    },
};
