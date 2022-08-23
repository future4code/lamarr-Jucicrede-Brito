import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToTripPage, goToBack, goToDetailsPage } from "../Rotas/coordinator";

export function AdminHomePage () {
   
    useProtectedPage()

    const navigate=useNavigate();

    const goToDetailsPage = (id) =>{
        navigate(`/details/trips/${id}`)
    }

    return(
    <>
    <h1>AdminHomePage</h1>
    <p>Lista de viagem</p>
    <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
    <button onClick={()=>{goToTripPage(navigate)}}>Formulário</button>
    <button onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</button>
    
    </>
    )
}