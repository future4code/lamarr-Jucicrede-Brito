import React from 'react';
import './cardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="contatos">
             <img src={ props.imagem } />
            <div>
                <h4>{ props.Email }</h4>
                <p>{ props.Endereço}</p>
            </div>
        </div>
    )
}

export default CardPequeno;