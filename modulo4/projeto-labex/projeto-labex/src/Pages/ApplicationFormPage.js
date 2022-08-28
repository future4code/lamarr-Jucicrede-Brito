import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import{MyForm, MyButton, H1, ComeBack, PageForm} from "../Style"

export function ApplicationFormPage () {
    const navigate = useNavigate();

    const [inputName, setInputName] = useState("")
    const [inputIdade, setInputIdade] = useState("")
    const [inputTexto, setInputTexto] = useState("")
    const [inputProf, setInputProf] = useState("")
    const [inputPais, setInputPais] = useState("")

    const body = {
        "name": inputName,
        "age": inputIdade,
        "applicationText": inputTexto,
        "profession": inputProf,
        "country": inputPais
    }

    const onSubmit = (e) => {
        
       console.log(body)
       e.preventDefault()

    }
    return(
        <PageForm>
        <H1>Inscreva-se para uma viagem</H1>
        <ComeBack onClick={()=>{goToBack(navigate)}}>Voltar</ComeBack>
        <MyForm onSubmit={onSubmit}>
            <label>Nome</label>
            <input required placeholder="nome" value={inputName} onChange={(event)=>{setInputName(event.target.value)}}/>
            <label>Idade</label>
            <input required placeholder="Idade" value={inputIdade} onChange={(event)=>{setInputIdade(event.target.value)}}/>
            <label>Texto de aplicação</label>
            <input required placeholder="Texto de aplicação" value={inputTexto} onChange={(event)=>{setInputTexto(event.target.value)}}/>
            <label>Profisão</label>
            <input required placeholder="Profisão" value={inputProf} onChange={(event)=>{setInputProf(event.target.value)}}/>
            <label>País</label>
            <input required placeholder="País" value={inputPais} onChange={(event)=>{setInputPais(event.target.value)}}/>
            <MyButton onClick={onSubmit}>Enviar</MyButton>
        </MyForm>
        
        </PageForm>
        )
    }

