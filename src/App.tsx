import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";
import {Person} from "./comopents/Person";
import {PersonalList} from "./comopents/PersonalList";

function App() {

    const personalName={
        f_name:"Harshana",
        l_name:"Senadeera"
    }

    const personList=[
        {
            firstname:'Harshana',
            lastname:'Senadeera'
        },
        {
            firstname:'Imasha',
            lastname:'Madhushani'
        },
        {
            firstname:'Ashan',
            lastname:'Gayeshma'
        },


    ]

  return (
    <div className="App">
      <Greet name={'Imasha'} marks={40} isLog={false}/>

        <Person name={personalName}/>

        <PersonalList names={personList}/>
    </div>
  );
}

export default App;
