import './App.css';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import {GlobalStyle} from './GlobalStyle';


function App() {
  return (
    <div className="App">
     <GlobalStyle/>
     <HomePage/>
     {/* <DetailsPage/> */}
    </div>
  );
}

export default App;
