import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    const completed = 75;
    return (
        <div className={'progressBar'}>
            <div className={'progressFiller'} style={{width:`${75}%`}}>
            </div>
        </div>
    );
}

export default ProgressBar;