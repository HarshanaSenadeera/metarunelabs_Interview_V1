import React from 'react';
import './App.css';
import {Greet} from "./comopents/Greet";
import {Person} from "./comopents/Person";
import {PersonalList} from "./comopents/PersonalList";
import {Status} from "./comopents/Status";
import {Heading} from "./comopents/Heading";
import {Oscar} from "./comopents/Oscar";
import {Button} from "./comopents/Button";
import {Input} from "./comopents/Input";
import {Container} from "./comopents/Container";
import {Logging} from "./state/Logging";
import {Counter} from "./state/Counter";
import {Box} from "./context/Box";
import {ThemeContextProvider} from "./context/ThemeContext";
import {User} from "./state/User";
import {DomRef} from "./refs/DomRef";
import {MutableRef} from "./refs/MutableRef";

function App() {

    /*Object*/
    const personalName={
        f_name:"Harshana",
        l_name:"Senadeera"
    }

    /*Array*/
    const personList=[
        {
            f_name:'Harshana',
            l_name:'Senadeera'
        },
        {
            f_name:'Imasha',
            l_name:'Madhushani'
        },
        {
            f_name:'Ashan',
            l_name:'Gayeshma'
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
        <Greet name={"Iamsha"} />
        
        {/*Click event props*/}
        <Button handleClick={() => {
            alert("Button Clicked...!")
        }}/>

        <Button handleClick={(event,id) => {
            console.log("Button Clicked...!",event,id)
        }}/>

        {/*Input event props*/}
        <Input value=' ' handleChange={event => console.log(event)}/>


        {/*Style props*/}
        <Container style={{border:'2px solid red', padding:'20px'}}/>

        {/*Use State*/}
        <Logging/>

        {/*Use reducer*/}
        <Counter/>

        {/*Theme Context*/}
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>

        <User/>

        {/*Use Ref*/}
        <DomRef/>
        <MutableRef/>
    </div>
  );
}

export default App;
