import { useState } from 'react';
import './filter.css';

function FilterName({ filteredPokemons, setInputValue }) {
    return (
        <div className="container search-wrap border border-success p-2 mb-2 ">
            <input
                onChange={(e) => {
                    // console.log(e.target.value);
                    filteredPokemons(e.target.value);
                    setInputValue(e.target.value);
                }}
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Search pokemon"
                // value={inputValue}
            />
            <datalist id="datalistOptions">
                <option value="pikachu" />
                <option value="meowth" />
                <option value="ponyta" />
                <option value="muk" />
                <option value="onix" />
            </datalist>
        </div>
    );
}
export default FilterName;
