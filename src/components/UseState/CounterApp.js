import React, { useState } from 'react';
import '../../styles/State.css'

function CounterApp() {

    const [state, setState] = useState({
        numero1:10,
        numero2:20,
        numero3:30
    })

    const {numero1, numero2} = state;
    console.log(state)

    return (
        <div>
           <h1> Counter {numero1}</h1>
           <h1> Counter {numero2}</h1>
           <hr/>
           <button className="btn btn-danger"
                 onClick={()=>setState({
                     ...state,
                        numero1: numero1+1
                     
                 })} >+1</button>
        </div>
    )
}

export default CounterApp
