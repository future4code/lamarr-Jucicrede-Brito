import React from "react";
import { useNavigate } from "react-router-dom";

export function AdminHomePage () {
    const navigate=useNavigate();

    const goToFormApplicPage = () => {
        navigate("/criate")
    }

    const goToBack=()=>{
        navigate(-1)
    }

    const goToDetailsPage = () => {
        navigate("/details")
    }

    return(
    <>
    <h1>AdminHomePage</h1>
    <p>Lista de viagem</p>
    <button onClick={goToBack}>Voltar</button>
    <button onClick={goToFormApplicPage}>Formulário</button>
    <button onClick={goToDetailsPage}>Detalhes</button>
    
    </>
    )
}