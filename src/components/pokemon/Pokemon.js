import './pokemon.css';
function Pokemon({ pokemon }) {
    const { name, id, weigth, height, type, sprites } = pokemon;

    return (
        <div className="card" style={{ width: '14rem' }}>
            <div className="wrap-img">
                <img
                    src={sprites.other.dream_world.front_default}
                    className="card-img-top img-pokemon"
                    alt="..."
                />
            </div>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    );
}

export default Pokemon;
