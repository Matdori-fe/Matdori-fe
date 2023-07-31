'use client';

import { RiArrowDownLine } from 'react-icons/ri';
import Text from '../Text/Text';
import { useRouter } from 'next/navigation';

interface SortButtonProps {
	label: string;
	href: string;
}

// TODO: 어떤 항목들을 정렬 모달에 띄울 것인지 생각해봐야함
export default function SortButton({ label, href = '' }: SortButtonProps) {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push(href, { scroll: false })}
			className='inline-flex items-center gap-[2px] p-[8px]'
		>
			<Text size='xs'>{label}</Text>
			<RiArrowDownLine size='12' />
		</div>
	);
}
