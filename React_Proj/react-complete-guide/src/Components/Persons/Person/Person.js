import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
    <div className="Person">
        <h5 onClick = {props.click}>My Name is {props.name} and i'm {props.age} years old!</h5>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}

export default Person;
