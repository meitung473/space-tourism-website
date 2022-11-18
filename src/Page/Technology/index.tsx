import { SubTitle } from "./style";
import { Outlet } from "react-router-dom";
import { MotionBox, MotionWrapper } from "../../components/Carousel";
import { ILayoutComponentProps } from "../../components/PageLayout/type";

function Technology({ navigation }: ILayoutComponentProps) {
    return (
        <MotionWrapper>
            {navigation}
            <MotionBox>
                <SubTitle layoutId="title">THE TERMINOLOGY…</SubTitle>
                <Outlet context="main" />
            </MotionBox>
            <Outlet context="image" />
        </MotionWrapper>
    );
}
export default Technology;
