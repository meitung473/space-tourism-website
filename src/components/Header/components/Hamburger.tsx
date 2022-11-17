import { motion } from "framer-motion";
import styled from "styled-components";
import { TUseToggle } from "../../../types/global";
import { br } from "../../../utils/Device";

const Wrapper = styled.div`
    ${br.md} {
        display: none;
    }
    position: relative;
    z-index: 50;
`;

export default function Hamburger({ toggle, handleToggle }: TUseToggle) {
    return (
        <Wrapper
            onClick={() => {
                if (typeof handleToggle === "function") {
                    handleToggle(undefined)();
                }
            }}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21"
            >
                {toggle ? (
                    <g fill="#D0D6F9" fillRule="evenodd">
                        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                    </g>
                ) : (
                    <g fill="#D0D6F9" fillRule="evenodd">
                        <motion.path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                )}
            </motion.svg>
        </Wrapper>
    );
}
