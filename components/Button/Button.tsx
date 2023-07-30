'use client';

import Text from '../Text/Text';
import Link from 'next/link';
import { RiEdit2Fill } from 'react-icons/ri';
import Toast from '../Toast/Toast';
import { useRouter } from 'next/navigation';

interface ButtonProps {
	label: string;
	variant: 'active' | 'inactive';
	writeIcon?: boolean;
	href?: string;
	errorMessage?: string;
	modal: boolean;
}

const BASE_BUTTON_CLASSES =
	'sm:w-[calc(412px-40px)] h-[60px] w-[calc(100%-40px)] py-3.5 justify-center items-center rounded-basic inline-flex my-[15px] mx-[20px]';

const variantClass = {
	active: 'bg-100',
	inactive: 'bg-gray',
};

const Button = ({
	label,
	variant = 'active',
	writeIcon,
	href = '',
	errorMessage = '',
	modal = false,
}: ButtonProps) => {
	const router = useRouter();

	return (
		<div className='flex justify-center w-full'>
			<button
				onClick={
					variant === 'inactive'
						? () => Toast(errorMessage)
						: () => router.push(href)
				}
				className={`${BASE_BUTTON_CLASSES} ${variantClass[variant]} ${
					modal ? 'mx-0 w-[100%-40px] absolute bottom-0' : 'fixed bottom-0'
				}`}
			>
				<div className='flex items-center gap-[8px]'>
					{writeIcon && <RiEdit2Fill fill='white' size='20' />}
					<Text color='white' fontWeight='bold' size='lg'>
						{label}
					</Text>
				</div>
			</button>
		</div>
	);
};

export default Button;

// FIXME: modal스타일과 그냥 버튼의 스타일 refactoring
