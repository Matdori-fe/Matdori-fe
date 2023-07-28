'use client';

import Text from '../Text/Text';
import Link from 'next/link';
import { RiEdit2Fill } from 'react-icons/ri';
import Toast from '../Toast/Toast';

interface ButtonProps {
	label: string;
	variant: 'active' | 'inactive';
	writeIcon?: boolean;
	href?: string;
	errorMessage: string;
}

const BASE_BUTTON_CLASSES =
	'fixed bottom-0 md:w-[calc(768px-40px)] h-[60px] w-[calc(100%-40px)] py-3.5 justify-center items-center rounded-basic inline-flex my-[15px] mx-[20px]';

const variantClass = {
	active: 'bg-100',
	inactive: 'bg-gray',
};

const Button = ({
	label,
	variant = 'active',
	writeIcon,
	href = '',
	errorMessage,
}: ButtonProps) => {
	return (
		<Link
			href={href}
			onClick={variant === 'inactive' ? () => Toast(errorMessage) : undefined}
		>
			<button className={`${BASE_BUTTON_CLASSES} ${variantClass[variant]}`}>
				<div className='flex items-center gap-[8px]'>
					{writeIcon && <RiEdit2Fill fill='white' size='20' />}
					<Text color='white' fontWeight='bold' size='lg'>
						{label}
					</Text>
				</div>
			</button>
		</Link>
	);
};

export default Button;

// active, inactive
// TODO: onClick을 어떻게 넣을지 아니면 Link로 href만 사용할지..
