import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import FilterName from '../filter/Filter';
import PokemonList from '../PokemonList';
import Spinner from '../Spinner';
import QuantityShow from '../quantityShow/QuantityShow';

const HomePage = ({ pokemonsData, setPokemonsData, currentPage, setCurrentPage }) => {
    const [urlCurrent, setUrlCurrent] = useState(
        `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
    );
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(20);

    const filteredPokemons = (value) => {
        let newPokemons = pokemonsData.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(value.toLowerCase());
        });

        return newPokemons;
    };

    useEffect(() => {
        if (pokemonsData.length === 0) {
            getPokemonsList(urlCurrent);
        } else {
            setLoading(true);
        }

        async function getPokemonsList(url) {
            const res = await fetch(url);
            const data = await res.json();
            getPokemonsData(data.results);
        }

        async function getPokemonsData(res) {
            setLoading(false);
            setPokemonsData([]);
            res.map(async (item) => {
                try {
                    const res = await fetch(item.url);
                    const data = await res.json();
                    setPokemonsData((state) => [...state, data]);
                    setLoading(true);
                } catch (err) {
                    console.log(err);
                }
            });
        }
    }, [urlCurrent]);

    const lastPokemonIndex = currentPage * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;

    const currentsPokemon = filteredPokemons(inputValue).slice(firstPokemonIndex, lastPokemonIndex);

    function handlePageClick(data) {
        let currentPage = data.selected + 1;
        setCurrentPage(currentPage);
    }
    function changeQuantityShowPoke(value) {
        setPokemonsPerPage(value);
    }

    const paginationLength = Math.ceil(filteredPokemons(inputValue).length / pokemonsPerPage);
    return (
        <>
            <div className="container">
                <FilterName filteredPokemons={filteredPokemons} setInputValue={setInputValue} />
                <QuantityShow
                    changeQuantityShowPoke={changeQuantityShowPoke}
                    pokemonsPerPage={pokemonsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    paginationLength={paginationLength}
                    pokemonsData={pokemonsData}
                />
            </div>
            <div className="container">
                {loading ? <PokemonList currentsPokemon={currentsPokemon} /> : <Spinner />}
            </div>
            <nav className="bg-body-tertiary ">
                <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={paginationLength}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item bs-secondary-bg'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                    initialPage={currentPage - 1}
                    activeClassName={'active'}
                />
            </nav>
        </>
    );
};
export default HomePage;
