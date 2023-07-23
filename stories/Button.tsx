// ./src/stories/Button.js

import React, { useMemo } from 'react';

const getSizeClasses = (size) => {
	switch (size) {
		case 'small': {
			return 'px-4 py-2.5';
		}
		case 'large': {
			return 'px-6 py-3';
		}
		default: {
			return 'px-5 py-2.5';
		}
	}
};

const getModeClasses = (isPrimary) =>
	isPrimary ? 'bg-black text-xxs' : 'bg-black';

const BASE_BUTTON_CLASSES =
	'cursor-pointer rounded-full border-2 leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps {
	primary?: boolean;
	size?: 'small' | 'medium' | 'large'; // size는 'small', 'medium', 'large' 중 하나의 값이어야 합니다.
	label: string;
	// 여기에 추가적인 속성들을 정의할 수 있습니다.
	// 예: onClick?: () => void; // 클릭 이벤트 핸들러
}

export const Button = ({
	primary = false,
	size = 'medium',
	label,
	...props
}: ButtonProps) => {
	const computedClasses = useMemo(() => {
		const modeClass = getModeClasses(primary);
		const sizeClass = getSizeClasses(size);

		return [modeClass, sizeClass].join(' ');
	}, [primary, size]);

	return (
		<button
			type='button'
			// className='bg-100'
			className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
			{...props}
		>
			{label}
		</button>
	);
};
