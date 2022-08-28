import React from "react";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../constants/constants";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";
import { goToTripPage, goToBack, goToDetailsPage } from "../Rotas/coordinator";
import axios from "axios";
import { H1, MyButton, MyForm3, PageAdmin } from "../Style";

export function AdminHomePage () {
    useProtectedPage()
    const navigate=useNavigate();

    const [dataTrip] = useRequestData(`${Base_Url}trips`);
    const token = localStorage.getItem("token");
    const headers = {
        headers:{
            auth:token,
        },
    }
    const deleteTrip = (id)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jucicrede-machado-lammar/trips/${id}`, headers)
        .then((response) => console.log(response.data), alert("Viagem enviada!"))
        .catch((error) => console.log(error.menssage))
    }

    const requisitionTrip = dataTrip&&dataTrip.trips.map((data)=>{
        return <div key={data.id}>{data.name}
        <button onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</button>
        <button onClick={()=>{deleteTrip(data.id)}}>Deletar Viagem</button></div>
    })

    return(
        <PageAdmin>
            <H1>Área Administrativa</H1>
        
    <MyForm3>
    {requisitionTrip}
    </MyForm3>
    <MyButton onClick={()=>{goToTripPage(navigate)}}>Formulário</MyButton>
    <MyButton onClick={()=>{goToBack(navigate)}}>Voltar</MyButton>
    </PageAdmin>
    )
}