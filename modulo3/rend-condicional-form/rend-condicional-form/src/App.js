import './App.css';
import {Etapa1} from './Components/Etapa1';
import {Etapa2} from './Components/Etapa2';
import {Etapa3} from './Components/Etapa3';
import {Final} from './Components/Final';
import {SeletorPaginas} from './Components/SeletorPaginas'


function App() {
  return (
    <div className="App">
    <Etapa1/>
    <Etapa2/>
    <Etapa3/>
    <Final/>
    <SeletorPaginas/>
    </div>
  );
}

export default App;
