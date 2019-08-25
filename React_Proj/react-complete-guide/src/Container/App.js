import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons:[
      {id:'qwe', name:'Kirti', age: '29'},
      {id:'asd', name:'Jeet', age:'29'}
    ],
    toggle : false
  }

  switchNamesHandler = (newName)=>{
    //console.log('In switchNameHandler');
    this.setState({
      persons: [
        {name:newName, age: '23'},
        {name:'Jeet', age:'29'}
      ]}
    )
  }

  deletePersonHandler = (personIndex) =>{
    const p1 = this.state.persons;
    p1.splice(personIndex,1);
    this.setState({persons : p1})

  }

  changeNameHandler =(event,id)=>
  {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const p ={
      ...this.state.persons[personIndex]
    };

    p.name = event.target.value;
    const person = [...this.state.persons];
    person[personIndex]=p;

    this.setState({
      persons: person}
    )

  }

  newToggleHandler = ()=>
  {
    const newToggle = this.state.toggle;
    this.setState({toggle : !newToggle});

  }


  render() {

    let person = null;
    if( this.state.toggle )
  {
    person = (
      <div>
        <Persons
        click ={this.deletePersonHandler} 
        persons = {this.state.persons}
        changed = {this.changeNameHandler}/>
      </div>
    );
  }
    return (
      <div className="App">
        <Cockpit 
        click = {this.switchNamesHandler.bind(this,"KirtiSarathy")}
        change = {this.newToggleHandler} />
       {person}
        
      </div>
    );
  }
}

export default App;
