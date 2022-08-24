import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";


export function TripDetailsPage () {

    useProtectedPage()

    const navigate=useNavigate();


    const {id} = useParams()
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS`
    const[tripDetails, setTripDetail] = useState(null)
    let content = null

    useEffect (()=>{
        const token = localStorage.getItem("token");
        axios.get(url,
            {
                headers:{
                    auth:token
                }
            }).then((response)=>{console.log(response.data)})
            .catch((erro)=>{console.log("Deu erro:", erro.response)},[]);
            
    })

    const pathParams = useParams();

    return (
        <>
        <h1>Detalhes da viagem </h1>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button>Reprovar</button>
        <button>Aprovar</button>
        </>
    )
   
}

