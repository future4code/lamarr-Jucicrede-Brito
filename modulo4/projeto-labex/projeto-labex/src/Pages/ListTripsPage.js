import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { Base_Url } from "../constants/constants";



export function ListTripsPage () {
    const navigate = useNavigate();

    const [dataTripList] = useRequestData(`${Base_Url}trips`)

    const tripList = dataTripList&&dataTripList.trips.map((trip)=>{
        return <li key={trip.id}>{trip.name}<button onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</button></li>

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
       
        {/* {isLoadingUser&&"...Carregando!!! ...."} */}
        <ul>
            {tripList}
        </ul>
        {/* {!isLoadingUser&&!dataTripList&&tripList} */}
        <button onClick={()=>{goToHomePage(navigate)}}>Voltar</button>
        
        </>
        )
    }
