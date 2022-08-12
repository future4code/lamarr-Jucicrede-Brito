import React from "react";
import { useNavigate } from "react-router-dom";

export function CriateTripPage () {
    const navigate=useNavigate();

    const goToBack=()=>{
        navigate(-1)
    }

    return(
        <>
        <h1>Criar Formulário</h1>
        <button onClick={goToBack}>Voltar</button>
        </>
        )
    }