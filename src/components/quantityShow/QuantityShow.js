import './quantityShow.css';

const QuantityShow = ({
    pokemonsPerPage,
    changeQuantityShowPoke,
    setCurrentPage,
    pokemonsData,
}) => {
    return (
        <div className="container wrapper-select">
            <span>Show pokemons </span>
            <select
                onChange={(e) => {
                    changeQuantityShowPoke(e.target.value);
                    setCurrentPage(pokemonsData.length / e.target.value);
                }}
                value={pokemonsPerPage}
                className="form-select status"
                aria-label="Default select example"
            >
                <option defaultValue value={20}>
                    20
                </option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    );
};
export default QuantityShow;
