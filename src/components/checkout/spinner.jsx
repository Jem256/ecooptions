import React from 'react';
import './spinner.css';
import green from '../../images/white.jpg';

export default function LoadingSpinner() {
    return (
        <div className='spinner'>
            <img src={green} alt='' />
            <div className="spinner-container">
                <div className='loading-spinner'></div>
            </div>
        </div>
    );
}
