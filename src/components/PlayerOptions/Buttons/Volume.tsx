import React, { useEffect, useState } from 'react';
import { ProgressBar } from '../../ProgressBar';
import { ReactComponent as FullVolumeIcon } from '../../../assets/icons/fullVolumeIcon.svg';
import { ReactComponent as MinVolumeIcon } from '../../../assets/icons/minVolumeIcon.svg';
import './Buttons.css';

export const Volume = () => {
	const [status, setStatus] = useState(true);
	const [value, setValue] = useState(50);

	useEffect(() => {
		if (status) {
			setVolumeValue(50);
		} else {
			setVolumeValue(0);
		}
	}, [status]);

	const setVolumeValue = (volumeValue: number) => {
		const value = Math.min(100, Math.max(0, volumeValue));
		setValue(value);
	};

	const volumeIcon =
		value == 0 ? (
			<MinVolumeIcon
				className={'icon'}
				onClick={() => setStatus((prev) => !prev)}
			/>
		) : (
			<FullVolumeIcon
				className={'icon'}
				onClick={() => setStatus((prev) => !prev)}
			/>
		);

	return (
		<div className={'volume'}>
			{volumeIcon}
			<div className={'regulator'}>
				<ProgressBar completed={value} setCompleted={setVolumeValue} />
			</div>
		</div>
	);
};
