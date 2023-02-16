import './filter.css';

function FilterName({ filteredPokemons, setInputValue, setCurrentPage }) {
    return (
        <div className="container search-wrap border border-success p-2 mb-2 ">
            <input
                onChange={(e) => {
                    filteredPokemons(e.target.value);
                    setInputValue(e.target.value);
                    setCurrentPage(1);
                }}
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Search pokemon"
            />
            <datalist id="datalistOptions">
                <option value="pikachu" />
                <option value="meowth" />
                <option value="ponyta" />
                <option value="onix" />
            </datalist>
        </div>
    );
}
export default FilterName;
