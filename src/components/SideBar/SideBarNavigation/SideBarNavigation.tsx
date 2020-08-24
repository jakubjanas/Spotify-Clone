import React from 'react';
import { ReactComponent as HomeIcon } from '../../../assets/icons/homeIcon.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg';
import { ReactComponent as LibraryIcon } from '../../../assets/icons/libraryIcon.svg';
import './SideBarNavigation.css';

const SideBarNavigation = () => {
    return (
        <ul className={'navigation'}>
                <li><HomeIcon />Home</li>
                <li><SearchIcon />Search</li>
                <li><LibraryIcon />Library</li>
            </ul>
    );
}

export default SideBarNavigation;