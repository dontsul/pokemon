import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/loyauts/Header';
import HomePage from './components/page/HomePage';
import CardPage from './components/page/CardPage';
import NotFoud from './components/page/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const [pokemonsData, setPokemonsData] = useState([]);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route
                            index
                            element={
                                <HomePage
                                    pokemonsData={pokemonsData}
                                    setPokemonsData={setPokemonsData}
                                />
                            }
                        />
                        <Route path="/:name" element={<CardPage pokemonsData={pokemonsData} />} />
                        <Route path="*" element={<NotFoud />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
