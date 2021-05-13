import React from 'react'
import { useFetch } from '../../Hook/useFetch'

function Api() {
    const {loading,data} = useFetch('https://rickandmortyapi.com/api/character/1')

    const {id, name,species, image} = !!data && data
    return (
        <div>
            
            <h1>Rick and Morty API</h1>
            <div className="alert alert-info text-center">
                    Loading ...
            </div>

            <h1>id:{id} </h1>
            <h2>Nombre: {name}</h2>
            <h2>Nombre: {species}</h2>
            <img src={image} />

            
        </div>
    )
}

export default Api
