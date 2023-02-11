import './quantityShow.css';

const QuantityShow = ({ quantityShowPoke, changeQuantityShowPoke }) => {
    return (
        <div className="container wrapper-select">
            <span>Show pokemons </span>
            <select
                onChange={(e) => {
                    // console.log(e.target.value);
                    changeQuantityShowPoke(e.target.value);
                    console.log(quantityShowPoke);
                }}
                value={quantityShowPoke}
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
