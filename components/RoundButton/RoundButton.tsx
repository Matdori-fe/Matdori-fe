import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { useRouter } from 'next/navigation';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	href?: string;
}

export default function RoundButton({
	label,
	onClick,
	href = '',
}: ButtonProps) {
	const router = useRouter();
	return (
		<button
			onClick={href ? () => router.push(href) : onClick}
			className='px-[10px] py-[5px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex'
		>
			<Text color='darkGray' size='xxs' fontWeight='normal'>
				{label}
			</Text>
		</button>
	);
}

// BUG: 아이폰 사파리에서 이 컴포넌트 안의 글씨가 조금 위로 간 오류
