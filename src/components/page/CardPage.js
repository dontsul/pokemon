import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner';
import NotFoud from './NotFound';

const CardPage = ({ pokemonsData }) => {
    const [pokemonInfo, setPokemonInfo] = useState('');
    const linkPokemon = 'https://pokeapi.co/api/v2/pokemon';
    const location = useLocation();

    let filteredName = pokemonsData.filter((pok) => {
        if (pok.name === location.pathname.slice(1)) {
            return true;
        }
    });

    useEffect(() => {
        if (filteredName.length > 0) {
            fetch(`${linkPokemon}${location.pathname}`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemonInfo(data);
                });
        }
    }, []);
    if (filteredName.length === 0) {
        return (
            <>
                <NotFoud />
            </>
        );
    }
    return <>{!pokemonInfo ? <Spinner /> : <View pokemonInfo={pokemonInfo} />}</>;
};
export default CardPage;

const View = (props) => {
    const { name, sprites, types, weight, height, stats } = props.pokemonInfo;

    return (
        <div className="container d-flex justify-content-around align-items-center">
            <div
                className="card d-flex justify-content-around align-items-center flex-row"
                style={{ width: '50rem', padding: '40px' }}
            >
                <div className="d-flex justify-content-center align-items-center p-30">
                    <img
                        src={sprites.other.dream_world.front_default}
                        className="card-img-top"
                        alt="pokemon"
                        style={{ width: '250px', heigth: '250px' }}
                    />
                </div>
                <div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Type: {types[0].type.name}</li>
                        <li className="list-group-item">Weight: {weight}</li>
                        <li className="list-group-item">Height: {height}</li>
                        <li className="list-group-item">HP: {stats[0].base_stat}</li>
                        <li className="list-group-item">Attac: {stats[1].base_stat}</li>
                        <li className="list-group-item">Defence: {stats[2].base_stat}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
