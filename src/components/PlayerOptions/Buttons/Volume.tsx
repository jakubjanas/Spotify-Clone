import React, { useEffect, useState } from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import { ReactComponent as FullVolumeIcon } from '../../../assets/icons/fullVolumeIcon.svg';
import './Buttons.css';

const Volume = () => {
    const [status, setStatus] = useState(true);
    const [value, setValue] = useState(50);

    useEffect(() => {
        if(status) {
            setVolumeValue(50);
        }
        else
        {
            setVolumeValue(0);
        }
        
    }, [status]);

    const setVolumeValue = (volumeValue: number) => {
        const value = Math.min(100, Math.max(0, volumeValue));
        setValue(value);
    }

    return (
        <div className={'volume'}>
            <FullVolumeIcon className={'icon'} onClick={() => setStatus(prev => !prev)}/>
            <div className={'regulator'}>
                <ProgressBar completed={value} />
            </div>
        </div>
    )
}
export default Volume;