import routes from "../../routes";
import { TfirstVisit } from "../../types/global";

export interface IPageLayoutProps {
    index: number;
    title: typeof routes[number]["title"];
    firstVisit: TfirstVisit;
}
/**
 * Each Page Layout default Props
 */
export interface ILayoutComponentProps {
    navigation: React.ReactNode;
}
