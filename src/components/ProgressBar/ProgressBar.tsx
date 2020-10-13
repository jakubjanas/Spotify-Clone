import React from 'react';
import './ProgressBar.css';

type Props = {
    completed: number;
}

const ProgressBar = ({completed} : Props) => {
    return (
        <div className={'progressBar'}>
            <div className={'progressFiller'} style={{width:`${completed}%`}}></div>
        </div>
    );
}

export default ProgressBar;