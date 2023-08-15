import Text from '../Text/Text';

interface ButtonProps {
	label: string;
	onClick?: () => void;
}

export default function RoundButton({ label, onClick }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className='px-[10px] py-[5px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex'
		>
			<Text color='darkGray' size='xxs' fontWeight='normal'>
				{label}
			</Text>
		</button>
	);
}

// BUG: 아이폰 사파리에서 이 컴포넌트 안의 글씨가 조금 위로 간 오류
