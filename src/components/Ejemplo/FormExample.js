import React, { useState, useEffect } from 'react';

function FormExample() {

    const [state, setState] = useState({
        name: '',
        lastName: ''
    });


    const { name, lastName } = state;

    useEffect(() => {
        console.log('se ha ejecutado el hook');
    }, [state]);

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return (
        <div className="form-group container ">
            <h1> UseEffect</h1>

            <input className="form-control mb-3"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange} />

            <input className="form-control mb-3"
                name="lastName"
                placeholder="lastName"
                value={lastName}
                onChange={handleInputChange} />

            <button className="btn btn-danger"
                onClick={() => setState({
                    ...state
                })} >Enviar</button>
          
          
        </div>
        
    );

   
}

export default FormExample;