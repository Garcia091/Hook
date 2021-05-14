import React, {useRef, useState, useEffect} from 'react'
import Api from '../CustomHook/Api'


function RefExample() {
    //Crear un estado que nos permita mostrar y ocultar

    const [stateOM, setstateOM] = useState(false)
    //Para solucionar el error de desmontar y llamar 
    //el SetState debemos hacer una referencia. desde el 
  

    //Recordemos la structura de UseEffect
    return (
        <div className="container text-center mt-5">
            <h1>Ejercicio Ejemplo Reft</h1>
            <hr/>

            {
              stateOM && <Api/>
            }

            <button className="btn btn-outline-danger"
                onClick={ () => setstateOM(!stateOM)}
            >
                Mostar/Ocultar
            </button>
        
           
        </div>
    )
}

export default RefExample
