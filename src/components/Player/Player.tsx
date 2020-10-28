import React from 'react';
import './Player.css';
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg';
import { SongProgressBar } from './SongProgressBar';
import { ShuffleButton, RepeatButton, PlayButton } from './Buttons';

export const Player = () => {
	return (
		<div className={'player'}>
			<ShuffleButton />
			<NextIcon className={'previousIcon'} />
			<PlayButton />
			<NextIcon className={'nextIcon'} />
			<RepeatButton />
			<SongProgressBar />
		</div>
	);
};
