import React, { useState, useEffect } from 'react'

function FormAnimal() {

    const [animal, setAnimal] = useState({
        nombre: '',
        patas: ''
    })

    const { nombre, patas } = animal;

    useEffect(() => {
        console.log('Hola')
    }, [])

    const handleInputChange = ({ target }) => {
        setAnimal({
            ...animal,
            [target.name]: target.value
        })
    }

    console.log(animal);
    return (
        <article className="container ">

            <h1 className="container text-center"> </h1>
            <hr />
            <div className="form-group ">
                <label htmlfor="nombre">Nombre: </label>
                <input
                    type="text"
                    name="nombre"
                    className="form-control mb-3"
                    placeholder="Nombre del animal"
                    onChange={handleInputChange}
                    value={nombre}

                />

                <label htmlfor="patas">Patas:</label>
                <input
                    type="text"
                    name="patas"
                    className="form-control mb-3"
                    placeholder="Catidad de extremidades"
                    onChange={handleInputChange}
                    value={patas}


                />
                <button className="btn btn-danger"
                    onClick={() => setAnimal({
                        ...animal
                        
                    })} >+1</button>
            
            </div>
            
        </article >
    )
}

export default FormAnimal
