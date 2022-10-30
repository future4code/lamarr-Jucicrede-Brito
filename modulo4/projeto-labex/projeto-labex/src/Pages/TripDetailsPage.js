import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToBack } from "../Rotas/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { Base_Url } from "../constants/constants";
import { H1, MyButton2, MyForm2, TPage } from "../Style";


export function TripDetailsPage() {

    useProtectedPage()
    const tripID = useParams().id;
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    const header={
        headers:{auth:token}
    }

    // const { id } = useParams()
    // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jucicrede-machado-lammar/trip/${pathParams.id}`
    const [tripDetails, setTripDetail] = useState({})
    const [candidateDetails, setCandidateDetails] = useState([])
    const [approvedDetails, setApprovedDetails] = useState([])
    const [update, setUpDate] = useState(true)

    useEffect(() => {
        
            axios.get(`${Base_Url}trip/${useParams.id}`, header)
            .then(response => {
                setTripDetail(response.data.trip)
                setCandidateDetails(response.data.trip.candidates)
                setApprovedDetails(response.data.trip.approved)
                setUpDate(false) })
            .catch(err => {})
    }, [update])

    const handleUpDate = () =>{
        setUpDate(true)
    }
    const approveCandidate = (e) =>{
        const candidateId = e.target.name
        handleUpDate()
        decideCandidate(true, candidateId)
    }
    const refuseCandidate = (e) =>{
        const candidateId = e.target.name
        handleUpDate()
        decideCandidate(false, candidateId)
    }
    const decideCandidate = (approved,id) =>{
        const body ={
            "approve": approved
        }
        axios.put(`${Base_Url}trips/${tripID}/candidates/${id}/decide`,body,header)
        .then((response)=>{})
        .catch((erro) =>{})
    }
    
    return (
        <TPage>
            <H1>Detalhes da viagem </H1>
            <MyForm2>
                <p>Nome: {tripDetails.name}</p>
                <>Descrição: {tripDetails.description}</>
                <p>Data: {tripDetails.data}</p>
                <p>Duração: {tripDetails.durationInDays}</p>
                <p>Id:{tripDetails.id}</p>
                <p>Planeta:{tripDetails.planet}</p>
            </MyForm2>

            {candidateDetails.map((candidate)=>{
                return <MyForm2 key={candidate.id}>
                    <h2>Candidato</h2>
                    <h4>Nome: {candidate.name}</h4>
                    <p>Idade: {candidate.age}</p>
                    <>Descrição: {candidate.applicationText}</>
                    <p>Profissão: {candidate.profession}</p>
                    <p>Id: {candidate.id}</p>
                    <button value={false} name={candidate.id} onClick={approveCandidate}>Aprovar</button>
                    <button value={false} name={candidate.id} onClick={refuseCandidate}>Rejeitar</button>
                </MyForm2>
            })}
            <>
            <H1>Aprovados</H1>
            {approvedDetails.map((approved) =>{
                return <MyForm2 key={approved.id}>
                    <p>{approved.name}</p>
                </MyForm2>
            })}
            </>
            <MyButton2 onClick={() => { goToBack(navigate) }}>Voltar</MyButton2>
        </TPage>
    )

}


