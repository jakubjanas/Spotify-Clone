import React from 'react';
import './SongProgressBar.css';
import { Row, Col } from 'reactstrap';
import ProgressBar from '../../ProgressBar/ProgressBar';

const SongProgressBar = () => {
    const completed = 75;
    return (
        <div className={'songBar'}>
            <div className={'time'}>
                <span>2:27</span>
            </div>
            <Col>
                <ProgressBar completed={completed} />
            </Col>
            <div className={'time'}>
                <span>3:15</span>
            </div>
        </div>
    );
}

export default SongProgressBar;