import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { Base_Url } from "../constants/constants";


export function TripDetailsPage() {

    useProtectedPage()
    const pathParams = useParams();
    const navigate = useNavigate();

    // const { id } = useParams()
    // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jucicrede-machado-lammar/trip/${pathParams.id}`
    const [tripDetails, setTripDetail] = useState([])

    const token = localStorage.getItem("token")

    useEffect(() => {
        detalhes()
    },[])
    
        const detalhes = ()=>{
            setTripDetail(true);
            axios.get(`${Base_Url}trip/${pathParams.id}`,
            {
                headers:{
                    auth:token
                }
            }).then((response) => {
                setTripDetail([response.data.trip])
            })
            .catch((error) => console.log(error.menssage))
            
        }

        console.log(detalhes)

    return (
        <>
            <h1>Detalhes da viagem </h1>
          
            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
        </>
    )

}



 //
    //     axios.get(url,
    //         {
    //             headers: {
    //                 auth: token
    //             }
    //         }).then((response) => { console.log(response.data) })
    //         .catch((erro) => { console.log("Deu erro:", erro.response) }, []);

    // })