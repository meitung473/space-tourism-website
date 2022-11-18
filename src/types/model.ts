import data from "../data/data.json";

export type TPath2Content = {
    [key in keyof typeof data]: typeof data[key][number];
};
