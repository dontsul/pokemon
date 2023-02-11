import pokemon from '../../img/Pokemon.png';
import './header.css';
const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container container-fluid d-flex justify-content-betwen align-items-center flex-row">
                <div className="d-flex wrap-logo">
                    <a href="">
                        <img className="logo" src={pokemon} alt="logo" />
                    </a>
                </div>

                <form className="d-flex align-items-center" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};
export default Header;
