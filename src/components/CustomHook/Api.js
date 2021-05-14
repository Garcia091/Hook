import React from 'react'
import { useFetch } from '../../Hook/useFetch'
import { useCounter } from '../../Hook/useCounter'

function Api() {
    const { state, incremento } = useCounter(1);
    const { loading, data,error } = useFetch(`https://rickandmortyapi.com/api/character/1`)

    const { id, name, status, spacies, image, gender } = !!data && data
    return (
        <div className="container text-center">
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading ...
                        </div>
                    )
                    :
                    (
                        <article className="container text-center">
                           
                            <h1 className="">Personajes de Rick and Morty</h1>
                            <div className="card-deck mb-3 text-center">

                                <div className="col-md-4 ">
                                    <div className="card bg-dark mt-4">
                                        <h3 className="card-title text-white"> {name}</h3>
                                        <img src={image} alt="Personaje" />
                                        <h3 className="card-text text-white">Estado: {status}</h3>
                                        <h3 className="card-text text-white">Especie: {spacies}</h3>
                                        <h3 className="card-text text-white">Género: {gender}</h3>
                                    </div>
                                </div>

                            </div>
                        </article>
                    )
            }
        </div>
    )
}

export default Api
