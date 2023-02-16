import { Link } from 'react-router-dom';

const NotFoud = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>404 Page Not Found</h1>
            <Link to="/pokemon">Go to Home</Link>
        </div>
    );
};

export default NotFoud;
