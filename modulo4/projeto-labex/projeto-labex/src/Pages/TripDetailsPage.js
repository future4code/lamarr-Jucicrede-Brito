import React from "react";
import { useNavigate } from "react-router-dom";

export function TripDetailsPage () {
    const navigate=useNavigate();

    const goToBack=()=>{
        navigate(-1)
    }

    return (
        <>
        <h1>Detalhes da viagem </h1>
        <button onClick={goToBack}>Voltar</button>
        </>
    )
   
}
