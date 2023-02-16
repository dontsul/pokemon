import { Outlet, Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import pokemon from '../../img/Pokemon.png';
import './header.css';
const Header = () => {
    return (
        <div>
            <nav className="bg-body-tertiary ">
                <div className=" container cont ">
                    <div className=" wrap-logo">
                        <Link to=".">
                            <img className="logo" src={pokemon} alt="logo" />
                        </Link>
                    </div>
                    <div className="">
                        <a
                            className=" link-repo"
                            href="https://github.com/dontsul/pokemon/"
                            target="_blank"
                        >
                            Repo
                            <AiFillGithub />
                        </a>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};
export default Header;
