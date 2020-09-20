import React, { Component } from 'react';
import './error-boundary.styles.scss';
import { FaExclamationTriangle } from "react-icons/fa";

class ErrorBoundary extends Component {
    constructor(){
        super();

        this.state = {
            hasErrored : false
        }
    }
    static getDerivedStateFromError(error){
        return { hasErrored : true}
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        const { hasErrored } = this.state;
        if(hasErrored){
            return (
                <div className="error-boundary">
                    <div className="error-boundary-icon"><FaExclamationTriangle /></div>
                    <div className="error-boundary-text">Something went wrong</div>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;