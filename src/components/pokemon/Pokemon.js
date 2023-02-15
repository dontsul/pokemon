import { Link } from 'react-router-dom';
import './pokemon.css';
function Pokemon({ pokemon }) {
    const { name, sprites } = pokemon;

    return (
        <Link
            to={name}
            className="card card-home"
            style={{ width: '14rem', textDecoration: 'none' }}
        >
            <div className="wrap-img">
                <img
                    src={sprites.other.dream_world.front_default}
                    className="card-img-top img-pokemon"
                    alt="pokemon"
                />
            </div>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </Link>
    );
}

export default Pokemon;
