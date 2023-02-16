import Pokemon from './pokemon/Pokemon';

function PokemonList({ currentsPokemon }) {
    return (
        <div className=" d-flex flex-row justify-content-center align-items-center flex-wrap">
            {currentsPokemon.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />;
            })}
        </div>
    );
}

export default PokemonList;
