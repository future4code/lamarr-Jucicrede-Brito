import React from "react";
import { useNavigate } from "react-router-dom";

export function HomePage () {
    const navigate = useNavigate();

    // const goToLogin = () => {
    //     navigate("/login")
    // }

    const goToAdimHomePage = () => {
        navigate("/admin")
    }

    const goToListPage = () => {
        navigate("/list")
    }


    return(
        <>
    <h1>Labex</h1>
    <button onClick={goToListPage}>Ver Viagens</button>
    <button onClick={goToAdimHomePage}>Área Admin</button>
    </>
    )  
   
 }