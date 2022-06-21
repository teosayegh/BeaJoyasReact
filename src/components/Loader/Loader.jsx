import Spinner from 'react-bootstrap/Spinner'
import './Loader.css';

export default function Loader() {

    return (
        <div className="box">
                <div>
                    <Spinner animation="border" role="status" className="color">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
    );
}