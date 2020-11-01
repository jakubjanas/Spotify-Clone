import React, { useState } from 'react';
import './SongProgressBar.css';
import { Col } from 'reactstrap';
import { ProgressBar } from '../../ProgressBar';

export const SongProgressBar = () => {
	const songLenght = 195;
	const [songTime, setSongTime] = useState(songLenght);
	const [completed, setCompleted] = useState(100);

	const onClickHandler = (completedValue: number) => {
		setCompleted(completedValue);
		setSongTime(calculateCurentSongTime(completedValue, songLenght));
	};

	return (
		<div className={'songBar'}>
			<div className={'time'}>
				<span>{toTimeFormat(songTime)}</span>
			</div>
			<Col>
				<ProgressBar completed={completed} setCompleted={onClickHandler} />
			</Col>
			<div className={'time'}>
				<span>{toTimeFormat(songLenght)}</span>
			</div>
		</div>
	);
};

const calculateCurentSongTime = (
	completedValue: number,
	songLenght: number
) => {
	return Math.round((songLenght * completedValue) / 100);
};

const toTimeFormat = (time: number) => {
	const date = new Date(new Date().setMinutes(0, time));

	return `${date.getMinutes()}:${toSecondsFormat(date.getSeconds())}`;
};

const toSecondsFormat = (seconds: number) => {
	return seconds < 10 ? '0' + seconds : seconds;
};
