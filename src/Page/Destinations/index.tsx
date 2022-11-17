import { SubHeading, Info, Line } from "./style";
import { Outlet } from "react-router-dom";
import { MotionBox, MotionWrapper } from "../../components/Carousel";
import { ILayoutComponentProps } from "../../types/global";

// this layout not moved when child route changes
const Destinations = ({ navigation }: ILayoutComponentProps) => {
    return (
        <MotionWrapper>
            <Outlet context="image" />
            <MotionBox>
                {navigation}
                <Outlet context="main" />
                <Line />
                <Info>
                    <SubHeading>AVG. DISTANCE</SubHeading>
                    <SubHeading>Est. travel time</SubHeading>
                    <Outlet context="subContent" />
                </Info>
            </MotionBox>
        </MotionWrapper>
    );
};
export default Destinations;
