import React,{useState} from "react";

export function Etapa1(){
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [idadeUsuario, setIdadeUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [escolaridade, setEscolaridade] = useState('')

return(
    <div>
        <h1>Dados Gerais</h1>
         <label>Nome:</label>
         <input placeholder="nome" value={nomeUsuario} onChange={(event)=>{setNomeUsuario(event.target.value)}}/>
         <label>Idade:</label>
         <input placeholder="idade" value={idadeUsuario} onChange={(event)=>{setIdadeUsuario(event.target.value)}}/>
         <label>Email:</label>
         <input placeholder="email" value={emailUsuario} onChange={(event)=>{setEmailUsuario(event.target.value)}}/>
         
         <label>Qual o grau de escolaridade:</label>
         <select>
            <option value="MedInc">Ensino Médio Incompleto</option>
            <option value="MedComp">Ensino Médio Completo</option>
            <option value="SupInc">Ensino Superior Incompleto</option>
            <option value="SupComp">Ensino Superior Completo</option>
         </select>
        

    </div>
)
   
}