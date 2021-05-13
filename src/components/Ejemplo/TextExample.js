import React, {useState} from 'react'

function TextExample() {

    const [showText, setShowText] = useState(false)

    return (

        <div>
            <button className="btn btn-danger"
                onClick={()=>setShowText(true)}
                >Mostrar Texto
            </button>

            { showText && <h1>Cambiamos el estado {showText}</h1>}
        </div>
    )
}

export default TextExample
