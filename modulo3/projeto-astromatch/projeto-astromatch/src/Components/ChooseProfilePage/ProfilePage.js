import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import axios from 'axios';

export function ProfilePage () {
    const [pageProfile, setPageProfile] = useState({
        
            "id": "xUrxMGvODWZa4ZASbfwx",
            "age": 26,
            "name": "Carol Danvers",
            "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
            "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
          
    })

    const getProfilePage = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucicrede/person').then(response =>{
         
            setPageProfile(response.data.profile)
        })
    }

    const chooseProfile = (choice) => {
        const body = {
            choice:choice,
            id: pageProfile.id

        }
       axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucicrede/choose-person', body).then(response =>{
        console.log(response)
        getProfilePage()
       })

    }

    useEffect(() => {
       getProfilePage()
    }, []);

    const onClickNo =() =>{
      chooseProfile(false)
    }

    const onClickYes =() =>{
        chooseProfile(true)
    }
    return(
        <>
        <Card profile={pageProfile}/>
        <Button onClickNo={onClickNo} onClickYes={onClickYes}/>
        </>
        
    )
}