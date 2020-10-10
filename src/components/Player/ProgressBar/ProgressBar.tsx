import React from 'react';
import './ProgressBar.css';
import { Row, Col } from 'reactstrap';

const ProgressBar = () => {
    const completed = 75;
    return (
        <Row>
            <div className={'time'}>
                <span>2:27</span>
            </div>
            <Col>
                <div className={'progressBar'}>
                    <div className={'progressFiller'} style={{width:`${completed}%`}}></div>
                </div>
            </Col>
            <div className={'time'}>
                <span>3:15</span>
            </div>
        </Row>
    );
}

export default ProgressBar;