import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";
import {Person} from "./comopents/Person";
import {PersonalList} from "./comopents/PersonalList";
import {Status} from "./comopents/Status";
import {Heading} from "./comopents/Heading";
import {Oscar} from "./comopents/Oscar";

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

        <Status status='error'/>

        {/*child props*/}
        <Oscar>
            <Heading>
                React child props advanced one
            </Heading>
        </Oscar>

        {/*Optional props*/}
        <Greet name={"Iamsha"}  isLog={false}/>
    </div>
  );
}

export default App;
