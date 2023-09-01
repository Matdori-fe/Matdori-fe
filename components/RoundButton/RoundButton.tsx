'use client';

import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { useRouter } from 'next/navigation';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	href?: string;
	variant?: 'small' | 'normal';
}

export default function RoundButton({
	label,
	onClick,
	href = '',
	variant = 'normal',
}: ButtonProps) {
	const router = useRouter();
	return (
		<div>
			<button
				onClick={href ? () => router.push(href) : onClick}
				className={`${
					variant === 'small' ? 'px-[8px] py-[2px]' : 'px-[10px] py-[5px]'
				} bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex`}
			>
				<Text color='darkGray' size='xxs' fontWeight='normal'>
					{label}
				</Text>
			</button>
		</div>
	);
}

// BUG: 아이폰 사파리에서 이 컴포넌트 안의 글씨가 조금 위로 간 오류
