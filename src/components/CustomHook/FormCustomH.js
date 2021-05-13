import React, { useState } from 'react'

export const FormCustomH = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email ,password} = setFormState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div className=" container text-center py-3">
            <h1>Clase con custome y Efect </h1>
            <hr/>
            <div className="form-group ">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-3 "
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="correo@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="password"
                    className="form-control mb-3"
                    placeholder="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

            </div>
        </div>
    )
}
