import Button from 'react-bootstrap/Button';
import './pagination.css';
function Pagination({ handlePrevPage, handleNextPage }) {
    return (
        <nav aria-label="Page navigation example " className="bg-body-tertiary nav-pag">
            <ul className="pagination d-flex justify-content-center align-items-end">
                <li className="page-item">
                    <Button
                        disabled={handlePrevPage ? false : true}
                        onClick={handlePrevPage}
                        variant="primary"
                    >
                        Prev
                    </Button>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <Button
                        disabled={handleNextPage ? false : true}
                        onClick={handleNextPage}
                        variant="primary"
                    >
                        Next
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
