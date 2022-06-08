import './Loader.css';
import Spinner from 'react-bootstrap/Spinner'

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