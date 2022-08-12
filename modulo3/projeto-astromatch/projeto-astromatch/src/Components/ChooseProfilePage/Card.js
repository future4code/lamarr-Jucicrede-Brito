import React from "react";
import { CardContainer, ImgCard, ParagrafoCard } from "../Style";

export function Card (props) {
    const profile = props.profile
    return(
      
        <CardContainer>
    
        <ImgCard src={profile.photo}/>
         
        <ParagrafoCard>
        <p>{profile.name}, {profile.age}</p>
        <p>{profile.bio}</p>
        </ParagrafoCard>
        
        </ CardContainer>
        
    )
}