import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/cardPequeno';
import foto from './img/Juci.jpg';
import servico from './img/Tupperware.png'
import servicoDois from './img/edificacoes.jpg'
import email from './img/Email.png'
import local from './img/local.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Jucicrede Machado de Brito" 
          descricao="Oi, eu sou a Juci."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={email}
        Email="cleide.edificacoes@hotmail.com"
        />

        <CardPequeno
        imagem={local}
        Endereço="Camaçari,Ba"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={servico} 
          nome="Tupperware" 
          descricao="Atualmente trabalho líderando uma equipe de vendas." 
        />
        
        <CardGrande 
          imagem={servicoDois}
          nome="Técnica em edificações" 
          descricao="Área civil." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
