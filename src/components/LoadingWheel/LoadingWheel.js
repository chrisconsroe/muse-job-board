import React, { Component } from 'react';
import './LoadingWheel.css';
import loaderImage from './loader.png';

class LoadingWheel extends Component {
    static propTypes = {}

    render() {
        return (
            <div className="loader-container">
                <img src={loaderImage}
                    alt="loading..."
                    className="loader"
                />
            </div>
        )
    }
}

export default LoadingWheel;
