import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";
import {Person} from "./comopents/Person";

function App() {

    const personalName={
        f_name:"Harshana",
        l_name:"Senadeera"
    }
  return (
    <div className="App">
      <Greet name={'Imasha'} marks={40} isLog={false}/>

        <Person name={personalName}/>
    </div>
  );
}

export default App;
