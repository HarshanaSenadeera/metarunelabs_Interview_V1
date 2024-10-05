import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";
import {Person} from "./comopents/Person";
import {PersonalList} from "./comopents/PersonalList";
import {Status} from "./comopents/Status";

function App() {

    /*Object*/
    const personalName={
        f_name:"Harshana",
        l_name:"Senadeera"
    }

    /*Array*/
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

        <Status status='loading'/>
    </div>
  );
}

export default App;
