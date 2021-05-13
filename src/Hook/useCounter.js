import {useState} from 'react'

export const useCounter = (inicial=10) => {

    const [state, setstate] = useState(inicial)

    const incremento = (factor=1) =>{
        setstate( state + factor)
    }

    const decremento = (factor=1) =>{
        setstate( state - factor)
    }

    const reset = () =>{
        setstate(inicial)
    }

    return{
        state,
        incremento,
        decremento,
        reset
    }
   
}
