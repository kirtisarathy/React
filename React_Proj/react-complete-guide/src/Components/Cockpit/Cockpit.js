import React from 'react';

const Cockpit = (props) =>{
    return ( 
        <div>
            <h1>This is react App</h1>
            <p>and its working!!!</p>
            <button onClick={props.click}>Switch Names</button>
            <button onClick={props.change}>Toggle</button>
        </div>
    );
}


export default Cockpit;