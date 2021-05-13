import React from 'react'
import { useCounter } from '../../Hook/useCounter'
import '../../styles/State.css'

function CustomHook() {
    const { state, incremento, decremento,reset } = useCounter();
    return (
        <div className="container text-center">
            <h1>CustomHook</h1>
            <h2> Contador {state}</h2>

            <button className="btn btn-primary" onClick={() => incremento()}> +1 </button>
            <button className="btn " onClick={reset}> Reset </button>
            <button className="btn btn-danger" onClick={() => decremento()}> -1 </button>
           
        </div>
    )
}

export default CustomHook
