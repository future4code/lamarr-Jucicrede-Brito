import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPage, goToLoginPage } from "../Rotas/coordinator";
import {ContainerHome, TitleHome, TitleMove, MyButton} from "../Style"


export function HomePage () {
    const navigate = useNavigate();


    return(
        <ContainerHome>
    <TitleHome>Labex</TitleHome>
    <marquee> 
        <TitleMove>Viajando no Espaço </TitleMove>
    </marquee>
    <MyButton onClick={()=>{goToListPage(navigate)}}>Ver Viagens</MyButton>
    <MyButton onClick={()=>{goToLoginPage(navigate)}}>Área Admin</MyButton>
    </ContainerHome>
    )  
   
 }