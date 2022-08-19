import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPage, goToLoginPage } from "../Rotas/coordinator";

export function HomePage () {
    const navigate = useNavigate();


    return(
        <>
    <h1>Labex</h1>
    <button onClick={()=>{goToListPage(navigate)}}>Ver Viagens</button>
    <button onClick={()=>{goToLoginPage(navigate)}}>Área Admin</button>
    </>
    )  
   
 }