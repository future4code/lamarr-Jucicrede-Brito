import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { Base_Url } from "../constants/constants";
import { goToFormApplicPage, goToBack } from "../Rotas/coordinator";



export function ListTripsPage () {
    const navigate = useNavigate();

    const [dataTripList,isLoadingUser,erroUser] = useRequestData(`${Base_Url}trips`)

    const tripList = dataTripList&&dataTripList.trips.map((trip)=>{
        return <li key={trip.id}>{trip.name}<button onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</button></li>

    })

    

    return(
        <>
        <h1>Lista de Viagem</h1>
       
        {isLoadingUser&&"...Carregando!"}
        <ul>
            {!isLoadingUser&&dataTripList&&tripList}
        </ul>
        {!isLoadingUser&&!dataTripList&&erroUser}
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        </>
        
        )
    }
