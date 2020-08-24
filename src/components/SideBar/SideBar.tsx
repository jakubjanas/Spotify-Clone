import React from 'react';
import SpotifyLogo from '../Logo/SpotifyLogo';
import SideBarNavigation from './SideBarNavigation/SideBarNavigation';

const SideBar = () => {
    return (
        <div>
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