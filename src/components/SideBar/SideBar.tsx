import React from 'react';
import SpotifyLogo from '../Logo/SpotifyLogo';
import SideBarNavigation from './SideBarNavigation/SideBarNavigation';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className={'sideBar'}>
            <SpotifyLogo />
            <SideBarNavigation />
            <div>
                <span>PLAYLISTS</span>
                <ul>
                    <li>Create playlist</li>
                    <li>Favorite tracks</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;