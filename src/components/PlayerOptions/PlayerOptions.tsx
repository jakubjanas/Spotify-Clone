import React from 'react';
import './PlayerOptions.css';
import { Playlist, Volume } from './Buttons';
import { ReactComponent as WorkstationIcon } from '../../assets/icons/workstationIcon.svg';

export const PlayerOptions = () => {
	return (
		<div className={'playerOptions'}>
			<Playlist />
			<WorkstationIcon className={'icon'} />
			<Volume />
		</div>
	);
};
