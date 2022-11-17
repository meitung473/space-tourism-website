import styled from "styled-components";
import { br } from "../../utils/Device";
import { adjustAlpha } from "../../utils/themeMethod";
const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 1.5em 3em;
    ${br.md} {
        padding: 0 0 0 2.5em;
    }
    ${br.xl} {
        padding: 2.5em 0 0 3em;
    }
`;

const Line = styled.hr`
    display: none;
    ${br.xxl} {
        display: block;
        width: 100%;
        border-width: 1px;
        border-color: ${({ theme }) =>
            adjustAlpha(theme.colors.greyScale.black_0, 0.25)};
    }
`;

export { Container, Line };
