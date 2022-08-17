import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForms } from "../hooks/useForms";
import { Base_Url } from "../constants/constants";



export function LoginPage () {
    const navigate=useNavigate();

    const [form, onChange]=useForms({email:"", password:""})

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${Base_Url}login`, form)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.menssage))

        console.log(form)

    }


    const goToBack=()=>{
        navigate(-1)
    }
    
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={fazerLogin}>
            <label htmlFor="email">Email:</label>
            <input
            name="email"
            id="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            type="email"
            required
            />
            <label htmlFor="senha"> Senha: </label>
            <input
            name="password"
            id="senha"
            placeholder="Senha"
            value={form.password}
            onChange={onChange}
            type="password"
            required
            />
         <button type="submit" >Enviar </button> 
        </form>
        <button onClick={goToBack}>Voltar</button>
        </>
        )
    }