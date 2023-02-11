import { useState, useEffect } from 'react';
import Pokemon from './pokemon/Pokemon';

function PokemonList({ pokemonsData }) {
    return (
        <div className=" d-flex flex-row justify-content-center align-items-center flex-wrap">
            {pokemonsData.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />;
            })}
        </div>
    );
}

export default PokemonList;
