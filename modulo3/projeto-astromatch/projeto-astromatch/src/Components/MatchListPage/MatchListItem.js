import React from "react";
import { ImgItem, ListaItemConteiner } from "./Style";

export function MatchListItem(props) {
    const profile = props.profile
    return (
        <ListaItemConteiner>
           
                <ImgItem src={profile.photo} />
            
            <p>{profile.name}</p>
        </ListaItemConteiner>


    )
}