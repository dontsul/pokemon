import { Outlet, Link } from 'react-router-dom';
import pokemon from '../../img/Pokemon.png';
import './header.css';
const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container container-fluid d-flex justify-content-betwen align-items-center flex-row">
                    <div className="d-flex wrap-logo">
                        <Link to=".">
                            <img className="logo" src={pokemon} alt="logo" />
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};
export default Header;
