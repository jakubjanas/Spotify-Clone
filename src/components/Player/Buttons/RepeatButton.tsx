import React, { useState } from 'react';
import { ReactComponent as RepeatIcon } from '../../../assets/icons/repeatIcon.svg';

enum RepeatState {
	NoRepeat = 0,
	Repeat,
	RepeatOnce,
}

export const RepeatButton = () => {
	const [state, setState] = useState(RepeatState.NoRepeat);
	const cssClass = `repeatIcon ${RepeatState[state]}`;

	return (
		<RepeatIcon
			className={cssClass}
			onClick={() => setState((prev) => (prev + 1) % 3)}
		/>
	);
};
