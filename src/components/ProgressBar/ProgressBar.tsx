import React, { useRef } from 'react';
import './ProgressBar.css';

type Props = {
	completed: number;
	setCompleted: (value: number) => void;
};

export const ProgressBar = ({ completed, setCompleted }: Props) => {
	const refP = useRef<HTMLDivElement>(null);

	const handleOnClick = (e: React.MouseEvent) => {
		if (refP.current) {
			const rect = refP.current.getBoundingClientRect();
			const offset = Math.floor(rect.left);
			const value = Math.floor(((e.pageX - offset) / rect.width) * 100);

			setCompleted(value);
		}
	};

	return (
		<div className={'progressBar'} onClick={handleOnClick} ref={refP}>
			<div className={'progressFiller'} style={{ width: `${completed}%` }} />
			<svg height='10' width='10'>
				<circle cx='5' cy='5' r='5' stroke='empty' fill='white' />
			</svg>
		</div>
	);
};
