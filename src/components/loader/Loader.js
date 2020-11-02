import React from 'react';
import {Spinner} from 'react-bootstrap';
import './Loader.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = (props) => {
    return (
        <div className="loader">
            <div>
                <Spinner animation="grow" />
            </div>
            <br></br>
            <p>{props.message}</p>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;
