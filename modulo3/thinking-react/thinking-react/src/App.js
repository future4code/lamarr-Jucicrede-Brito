import './App.css';
import Filtro from './Components/Filtro';
import Carinho from './Components/Carinho';
import Produto from './Components/Produto';
import {DivPai, HeaderApp} from './Style';
import {dados} from "./mockpDados"

function App() {
  return (
  
    <DivPai>

     <HeaderApp/>
     <Produto myDados={dados}/>
     <Filtro/>
     <Carinho/>
    </DivPai>

  )
}

export default App;
