import { css } from "styled-components";
import { IWithPathStyled, TStyleVariants } from "../types/global";

export const routeStyleVariants = (
    styleVariants: Partial<TStyleVariants>
) => css`
    ${({ $path }: IWithPathStyled) =>
        styleVariants[$path as keyof TStyleVariants]};
`;
