import React from 'react';
import { ReactComponent as CdIcon } from '../../assets/icons/cdIcon.svg';
import './CurrentSong.css';

export const CurrentSong = () => {
	return (
		<div className={'currentSong'}>
			<div className={'songCover'}>
				<CdIcon height={'50px'} width={'50px'} opacity={'90%'} />
			</div>
			<div className={'songInfo'}>
				<div className={'title'}>Song title</div>
				<div className={'author'}>Author</div>
			</div>
		</div>
	);
};
