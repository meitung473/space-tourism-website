import { NavText } from "../../style/Typo";
import { theme } from "../../style/theme";
import { br } from "../../utils/Device";
import styled from "styled-components";

const SubTitle = styled(NavText)`
    text-transform: uppercase;
    color: ${theme.colors.primary.Default};
    text-align: center;
    ${br.xl} {
        text-align: left;
        grid-column: 2 / 2;
    }
`;

export { SubTitle };
