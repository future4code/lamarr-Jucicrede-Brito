import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { Base_Url } from "../constants/constants";



export function ListTripsPage () {
    const navigate = useNavigate();

    const [dataTripList,isLoadingUser,erroUser] = useRequestData(`${Base_Url}trips`)

    const tripList = dataTripList&&dataTripList.trips.map((trip)=>{
        return <li key={trip.id}>{trip.name}</li>

    })

    const goToFormApplicPage = () => {
        navigate("/application")
    }
    const goToHomePage = () => {
        navigate("/")
    }

    return(
        <>
        <h1>Lista de Viagem</h1>
        <p>Para vermos todas as viagens</p>
        {isLoadingUser&&"...Carregando!!! ...."}
        <ul>
            {!isLoadingUser&&dataTripList&&erroUser}
        </ul>
        {!isLoadingUser&&!dataTripList&&tripList}
        <button onClick={()=>{goToHomePage(navigate)}}>Voltar</button>
        <button onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</button>
        </>
        )
    }
