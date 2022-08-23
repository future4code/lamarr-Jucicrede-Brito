import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
// import axios from "axios";
// import { useForms } from "../hooks/useForms";

export function TripDetailsPage () {

    useProtectedPage()

    const navigate=useNavigate();

    // const [form, onChange, clear] = useForm({ planet: "", durationInDays: "",date: "",
    // name: "", description: "", candidates: ""   })

    


    

    return (
        <>
        <h1>Detalhes da viagem </h1>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        <button>Reprovar</button>
        <button>Aprovar</button>
        </>
    )
   
}
