import axios from "axios";
import React from "react";


export function ResetButton () {
  const onClickReset = () =>{
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucicrede/clear').then(response =>{

    })
  }
    return(
        <>
          <button onClick={onClickReset}>Resetar curtida e matchs</button>
        </>
        
    
    )
}