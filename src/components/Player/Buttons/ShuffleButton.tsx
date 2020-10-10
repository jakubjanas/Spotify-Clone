import React, { useState } from 'react';
import { ReactComponent as ShuffleIcon } from '../../../assets/icons/shuffleIcon.svg';
import './Buttons.css';

const ShuffleButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const cssClass = `shuffleIcon ${isClicked ? 'active' : ''}`;
    
    return <ShuffleIcon className={cssClass} onClick={() => setIsClicked(prevState => !prevState) } />
}

export default ShuffleButton;