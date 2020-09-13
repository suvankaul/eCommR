import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './Loader.style.scss'
const Loader = WrapperComponent => {
    const loader = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        ) :
        <WrapperComponent {...otherProps} />
    }
    return loader;
}

export default Loader;