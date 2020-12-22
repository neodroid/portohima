import styled from "styled-components";

export const TitleHomeContent = styled.h6`
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #111111;
    margin-bottom: ${props => props.about ? "15px" : "22px"};
`;