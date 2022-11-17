import ReactDOM from "react-dom";
import { ModalBox, Overlay } from "./style";

interface IProps {
    children?: React.ReactNode;
}

interface OverlayComponentProps extends IProps {
    outlet: boolean;
    overlay: boolean;
    parent: HTMLDivElement;
}

export default function OverlayComponent(
    props: Partial<OverlayComponentProps>
) {
    const { children, overlay } = props;

    return ReactDOM.createPortal(
        props.outlet ? (
            <>{children}</>
        ) : (
            <ModalBox>
                {overlay && <Overlay />}
                {children}
            </ModalBox>
        ),
        props?.parent ?? (document.getElementById("modal-root") as HTMLElement)
    );
}
