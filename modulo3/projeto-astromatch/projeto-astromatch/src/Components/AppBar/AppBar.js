import React from "react";
import { AppBarConteiner } from "./Styled";

export function AppBar (props) {
    return(
      
        <AppBarConteiner>
            <button onClick={props.goToProfilePage}>&#128072;</button>
            <p>astromatch</p>
            <button onClick={props.goToMatchListPage}>&#128073;List</button>

        </AppBarConteiner>
        
    )
}