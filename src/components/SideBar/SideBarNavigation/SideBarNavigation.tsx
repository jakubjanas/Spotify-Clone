import React from 'react';
import { ReactComponent as HomeIcon } from '../../../assets/icons/homeIcon.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/searchIcon.svg';
import { ReactComponent as LibraryIcon } from '../../../assets/icons/libraryIcon.svg';
import './SideBarNavigation.css';
import { NavLink } from 'react-router-dom';

export const SideBarNavigation = () => {
	return (
		<ul className={'navigation'}>
			<NavLink exact={true} activeClassName={'is-active'} to='/home'>
				<li>
					<HomeIcon />
					Home
				</li>
			</NavLink>
			<NavLink activeClassName={'is-active'} to='/search'>
				<li>
					<SearchIcon />
					Search
				</li>
			</NavLink>
			<NavLink activeClassName={'is-active'} to='/library'>
				<li>
					<LibraryIcon />
					Library
				</li>
			</NavLink>
		</ul>
	);
};
