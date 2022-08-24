import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useForms } from "../hooks/useForms";
import { Base_Url } from "../constants/constants"; 
import axios from "axios";

export function CriateTripPage () {
    useProtectedPage()
    const navigate=useNavigate();
    const [form,onChange,clear]= useForms({name: "", planet: "", date: "", description:"", durationInDays:""})

    const novaViagem = (event) =>{
        event.preventDefault()
        const body={
            name:form.name,
            planet:form.planet,
            date:form.date,
            description:form.description,
            durationInDays:form.durationInDays}
        console.log(body);
        axios.post(`${Base_Url}trips`, body,{headers:{auth:localStorage.getItem('token')}})
           .then((responde)=>{
            alert("Viagem cadastrada com sucesso")
            clear();
        })
        .catch((error)=>console.log(error))
        }

    return(
        <>
        <h1>Criar Formulário</h1>
        < form onSubmit={novaViagem}>
            <h1>Registrar nova viagem</h1>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name' value={form.name} id="name" onChange={onChange} required/>
            <label htmlFor="planet">Destino</label>
            <input type="text" name='planet' value={form.planet} id="planet" onChange={onChange} required />
            <label htmlFor="date">Data</label>
            <input type="text" name='date' value={form.date} id="date" onChange={onChange} pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$" required />
            <label htmlFor="description">Descrição</label>
            <input type="text" name='description' value={form.description} id="description" onChange={onChange} required />
            <label htmlFor="durationInDays">Duração</label>
            <input type="text" name='durationInDays' value={form.durationInDays} id="durationInDays" onChange={onChange} required />
            <button>Cadstrar viagem</button>
        </form>
        <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        </>
        )
    }