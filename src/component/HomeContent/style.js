import styled from "styled-components";

export const TitleHomeContent = styled.div`
    width: ${props => props.recent ? "50%" : "100%"};
    font-weight: ${props => props.view ? "normal" : "bold"};
    font-size: 16px;
    line-height: 21px;
    letter-spacing: ${props => props.view ? "0" : "0.1em"};
    color: ${props => props.view ? "#5A5A5A" : "#111111"};
    margin-bottom: ${props => props.about ? "15px" : "22px"};
    display: ${props => props.recent ? "inline-flex" : "block"};
    cursor: ${props => props.view ? "pointer" : "auto"};
    align-item: ${props => props.view ? "right" : "left"};
    flex-direction: ${props => props.view ? "row-reverse" : "none"};
`;