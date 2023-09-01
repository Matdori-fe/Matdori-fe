'use client';

import Text from '@/components/Text/Text';
import { IOption } from './OptionSection';
import { RiBilibiliFill } from 'react-icons/ri';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import router from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OptionItem(item: IOption) {
	const router = useRouter();

	const onClick = () => {
		if (item.href) router.push(item.href);
		else item.onClick;
	};

	return (
		<div onClick={onClick}>
			<div className='h-[48px] flex items-center gap-[10px] px-[10px]'>
				<div className='text-sm text-100'>{item.icon}</div>
				<Text size='sm' fontWeight='semibold'>
					{item.name}
				</Text>
			</div>
			<div className='h-[1px] bg-lightGray w-full' />
		</div>
	);
}
