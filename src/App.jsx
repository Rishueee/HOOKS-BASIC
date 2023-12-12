import React, { useContext, useState } from 'react';
import './App.css';
import UseContext from './Components/Usecontext';
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
   
    
   
    <ToggleTheme.Provider value={state}>
      <button id='but' onClick={handleToggle}>Toggle</button>
   
      <UseContext /> 
    </ToggleTheme.Provider>
    
    
    </>
  );
}

export default App;
