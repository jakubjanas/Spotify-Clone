import React, { useState } from 'react';
import './SongProgressBar.css';
import { Col } from 'reactstrap';
import ProgressBar from '../../ProgressBar/ProgressBar';

const SongProgressBar = () => {
    const [completed, setCompleted] = useState(100);

    return (
        <div className={'songBar'}>
            <div className={'time'}>
                <span>2:27</span>
            </div>
            <Col>
                <ProgressBar completed={completed} setCompleted={setCompleted}/>
            </Col>
            <div className={'time'}>
                <span>3:15</span>
            </div>
        </div>
    );
}

export default SongProgressBar;