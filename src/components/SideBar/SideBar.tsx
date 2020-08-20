import React from 'react';
import SpotifyLogo from '../Logo/SpotifyLogo';

const SideBar = () => {
    return (
        <div>
            <SpotifyLogo />
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Library</li>
            </ul>
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