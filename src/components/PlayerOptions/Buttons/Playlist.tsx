import React, { useState } from 'react';
import { ReactComponent as PlaylistIcon } from '../../../assets/icons/playlistIcon.svg';

export const Playlist = () => {
	const [isClicked, setIsClicked] = useState(false);
	const cssClass = `icon playlistIcon ${isClicked ? 'active' : ''}`;

	return (
		<PlaylistIcon
			className={cssClass}
			onClick={() => setIsClicked((prevState) => !prevState)}
		/>
	);
};
