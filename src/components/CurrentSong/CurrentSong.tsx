import React from 'react';
import { ReactComponent as CdIcon } from '../../assets/icons/cdIcon.svg';
import './CurrentSong.css';

export const CurrentSong = () => {
	return (
		<div className={'currentSong'}>
			<div className={'songCover'}>
				<CdIcon />
			</div>
			<div>Song name</div>
			<div>icons</div>
		</div>
	);
};
