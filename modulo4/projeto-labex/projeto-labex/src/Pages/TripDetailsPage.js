import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";

export function TripDetailsPage () {

    useProtectedPage()

    const navigate=useNavigate();

    return (
        <>
        <h1>Detalhes da viagem </h1>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        </>
    )
   
}
