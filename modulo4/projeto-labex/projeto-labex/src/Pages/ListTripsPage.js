import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { Base_Url } from "../constants/constants";
import { goToFormApplicPage, goToBack } from "../Rotas/coordinator";
import { ContainerTravel, MyButton2, Travel } from "../Style";



export function ListTripsPage () {
    const navigate = useNavigate();

    const [dataTripList,isLoadingUser,erroUser] = useRequestData(`${Base_Url}trips`)

    const tripList = dataTripList&&dataTripList.trips.map((trip)=>{
        return <li key={trip.id}>{trip.name}<MyButton2 onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</MyButton2></li>

    })

    return(
        <ContainerTravel>
            <MyButton2 onClick={()=>{goToBack(navigate)}}>Voltar</MyButton2>
        <Travel>
       <h1>Lista de Viagem</h1>
        {isLoadingUser&&"...Carregando!"}
        <>
            {!isLoadingUser&&dataTripList&&tripList}
        </>
        {!isLoadingUser&&!dataTripList&&erroUser}
        </Travel>
        
        </ContainerTravel>
        
        )
    }
