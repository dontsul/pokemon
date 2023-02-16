import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner';
import NotFoud from './NotFound';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CardPage = ({ pokemonsData, currentPage, setCurrentPage }) => {
    const [pokemonInfo, setPokemonInfo] = useState('');
    const linkPokemon = 'https://pokeapi.co/api/v2/pokemon';
    const location = useLocation();
    const page = currentPage;
    let filteredName = pokemonsData.filter((pok) => {
        if (pok.name === location.pathname.slice(9)) {
            return true;
        }
    });

    useEffect(() => {
        if (filteredName.length > 0) {
            fetch(`${linkPokemon}${location.pathname.slice(8)}`)
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
    return (
        <>
            {!pokemonInfo ? (
                <Spinner />
            ) : (
                <View pokemonInfo={pokemonInfo} setCurrentPage={setCurrentPage} page={page} />
            )}
        </>
    );
};
export default CardPage;

const View = (props) => {
    const { setCurrentPage, page } = props;
    const { name, sprites, types, weight, height, stats } = props.pokemonInfo;

    return (
        <div className="container d-flex justify-content-around align-items-center">
            <div
                className="card d-flex justify-content-around align-items-center flex-row"
                style={{ width: '50rem', padding: '40px' }}
            >
                <div
                    style={{ width: '350px', heigth: '350px' }}
                    className="d-flex justify-content-center align-items-center p-30"
                >
                    <img
                        src={sprites.other.dream_world.front_default}
                        className="card-img-top"
                        alt="pokemon"
                        style={{ maxWidth: '350px', maxHeigth: '350px' }}
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
                <Link
                    title="Go back"
                    to="/pokemon"
                    onClick={setCurrentPage(page)}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                    }}
                >
                    <RiArrowGoBackFill />
                </Link>
            </div>
        </div>
    );
};
