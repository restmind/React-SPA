import React from 'react';
import { StyledTitle, TitleDescription, TitleText } from "./Title.styled.js";

function Title(props) {
    return(
        <StyledTitle>
            <div className="tile-img">
                <img src={props.image} alt="door"></img>
            </div>
            <TitleDescription>
                <h3>{props.heading}</h3>
                <TitleText>{props.message}</TitleText>
            </TitleDescription>
        </StyledTitle>
    );
}

export default Title;