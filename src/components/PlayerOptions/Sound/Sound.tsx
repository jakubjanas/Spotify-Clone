import React from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import { ReactComponent as FullVolumeIcon } from '../../../assets/icons/fullVolumeIcon.svg';
import { Col, Row } from 'reactstrap';

const Sound = () => {
    const completed = 20;

    return (
        <div>
            <FullVolumeIcon />
            <ProgressBar completed={completed} />
        </div>
    )
}
export default Sound;