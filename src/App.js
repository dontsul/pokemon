import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import PokemonList from './components/PokemonList';
import Pagination from './components/pagination/Pagination';
import Spinner from './components/Spinner';
import QuantityShow from './components/quantityShow/QuantityShow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    // const [allPokemons, setAllPokemons] = useState([]);
    const [quantityShowPoke, setQuantityShowPoke] = useState(20);
    const [urlCurrent, setUrlCurrent] = useState(
        `https://pokeapi.co/api/v2/pokemon?limit=${quantityShowPoke}&offset=0`
    );
    const [pokemonsData, setPokemonsData] = useState([]);
    const [nextPokemons, setNextPokemons] = useState();
    const [prevPokemons, setPrevPokemons] = useState();
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState();

    function changeQuantityShowPoke(value) {
        setQuantityShowPoke(value);
        setUrlCurrent(`https://pokeapi.co/api/v2/pokemon?limit=${value}&offset=0`);
    }

    async function getPokemonsList(url) {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        setNextPokemons(data.next);
        setPrevPokemons(data.previous);
        getPokemonsData(data.results);
        setLoading(false);
    }

    async function getPokemonsData(res) {
        setPokemonsData([]);
        res.map(async (item) => {
            try {
                const res = await fetch(item.url);
                const data = await res.json();
                setPokemonsData((state) => [...state, data]);
            } catch (err) {
                console.log(err);
            }
        });
    }

    const handleNextPage = () => {
        setUrlCurrent(nextPokemons);
    };
    const handlePrevPage = () => {
        setUrlCurrent(prevPokemons);
    };

    useEffect(() => {
        getPokemonsList(urlCurrent);
    }, [urlCurrent]);
    // console.log(pokemonsData);
    return (
        <div className="App">
            <Header />
            <div className="container">
                <QuantityShow
                    changeQuantityShowPoke={changeQuantityShowPoke}
                    quantityShowPoke={quantityShowPoke}
                />
            </div>
            <div className="container">
                {loading ? <Spinner /> : <PokemonList pokemonsData={pokemonsData} />}
            </div>
            <Pagination
                handleNextPage={nextPokemons ? handleNextPage : null}
                handlePrevPage={prevPokemons ? handlePrevPage : null}
            />
        </div>
    );
}

export default App;
