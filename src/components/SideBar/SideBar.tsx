import React from 'react';
import { SpotifyLogo } from '../Logo';
import { SideBarNavigation } from './SideBarNavigation';
import './SideBar.css';

export const SideBar = () => {
	return (
		<div className={'sideBar'}>
			<div className={'logo'}>
				<SpotifyLogo />
			</div>
			<div className={'navigationBar'}>
				<SideBarNavigation />
			</div>
			<div>
				<span>PLAYLISTS</span>
				<ul>
					<li>Create playlist</li>
					<li>Favorite tracks</li>
				</ul>
			</div>
		</div>
	);
};
