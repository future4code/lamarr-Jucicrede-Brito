// import logo from './logo.svg';
import logoJuci from "./img/juci.jpg"
import './App.css';

function App() {
  function mensagem(){
    alert("Boa noite!")
  }
  return (
    <div className="App">
     <h1>Nenhum de nós é tão bom quanto todos nós juntos! Sejam bem vindos.</h1>
     <img className="Imagem" src={logoJuci} alt="logo"/>
     <p> Jucicrede Machado</p>
     <button onClick={mensagem}>Click aqui</button>
     
    </div>
  );
}

export default App;
