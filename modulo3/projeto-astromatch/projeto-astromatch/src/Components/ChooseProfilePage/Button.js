import axios from "axios";
import React from "react";
import { ButtonContainer } from "../Style";

export function Button (props) {
   
    return(
      
        <ButtonContainer>
            <button onClick={props.onClickNo}>&#10060;</button>
            <button onClick={props.onClickYes}>&#128154;</button>

        </ButtonContainer>
        
    )
}