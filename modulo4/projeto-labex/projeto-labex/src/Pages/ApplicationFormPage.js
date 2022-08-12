import React from "react";
import { useNavigate } from "react-router-dom";

export function ApplicationFormPage () {
    const navigate = useNavigate();

    const goToBack=()=>{
        navigate(-1)

    }
    return(
        <>
        <h1>Inscreva-se para uma viagem</h1>
        <button onClick={goToBack}>Voltar</button>
        <button>Enviar</button>
        </>
        )
    }
