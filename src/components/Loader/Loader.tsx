import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" />
            </div>
        </div>
    )
}

export default Loader;