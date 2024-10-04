import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";

function App() {
  return (
    <div className="App">
      <Greet name={'Imasha'} marks={40} isLog={false}/>
    </div>
  );
}

export default App;
