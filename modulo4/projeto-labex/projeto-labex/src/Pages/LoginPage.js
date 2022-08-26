import axios from "axios";
import React from "react";
import { goToBack } from "../Rotas/coordinator";
import { useNavigate } from "react-router-dom";
import { useForms } from "../hooks/useForms";
import { Base_Url } from "../constants/constants";
import {Travel,MyForm, MyButton2} from "../Style"

export function LoginPage() {
    const navigate = useNavigate();

    const [form, onChange] = useForms({ email: "", password: "" })

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${Base_Url}login`, form)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin")
            })
            .catch((error) => console.log(error.menssage))

        console.log(form)
    }

    return (
        <Travel>
            <h1>Login</h1>
            <MyForm onSubmit={fazerLogin}>
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
            </MyForm>
            <MyButton2 onClick={() => { goToBack(navigate) }}>Voltar</MyButton2>
        </Travel>
    )
}