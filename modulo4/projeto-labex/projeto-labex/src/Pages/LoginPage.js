import React from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage () {
    const navigate=useNavigate();

    const goToBack=()=>{
        navigate(-1)

    }
    return(
        <>
        <h1>Login</h1>
        <button onClick={goToBack}>Voltar</button>
        <button>Entrar</button>
       
        </>
        )
    }