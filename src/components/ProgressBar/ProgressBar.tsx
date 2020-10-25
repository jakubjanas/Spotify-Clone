import React from 'react';
import './ProgressBar.css';

type Props = {
    completed: number;
}

const ProgressBar = ({completed} : Props) => {
    return (
        <div className={'progressBar'}>
            <div className={'progressFiller'} style={{width:`${completed}%`}} />
            <svg height="10" width="10">
                <circle cx="5" cy="5" r="5" stroke="empty" fill="white" />
            </svg>
        </div>
    );
}

export default ProgressBar;