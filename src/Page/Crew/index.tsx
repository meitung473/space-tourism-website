import { Outlet } from "react-router-dom";
import { MotionBox, MotionWrapper } from "../../components/Carousel";
import { ILayoutComponentProps } from "../../types/global";

const Crew = ({ navigation }: ILayoutComponentProps) => {
    return (
        <MotionWrapper>
            <Outlet context="image" />
            <MotionBox>
                {navigation}
                <Outlet context="main" />
            </MotionBox>
        </MotionWrapper>
    );
};

export default Crew;
