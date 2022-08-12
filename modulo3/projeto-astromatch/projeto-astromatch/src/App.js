import './App.css';
import React from 'react';
import { Main } from './Components/Main/Main';
import { ResetButton } from './Components/ResetButton/ResetButton';
import { AppContainer } from './Components/Main/Style';


function App() {
  return (
   <AppContainer>
    <div className="App">
  
     <Main/>
     <ResetButton/>
     
    </div>
    </AppContainer>
    
  );
 
}

export default App;
