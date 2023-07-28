'use client';

import {
	RiArrowLeftLine,
	RiCheckFill,
	RiHeartLine,
	RiMore2Fill,
	RiShareBoxLine,
} from 'react-icons/ri';
import { Right } from './Header';
import { moveToBack } from '@/utils/page/moveToBack';
import { FiTrash2 } from 'react-icons/fi';

const rightIcons = {
	search: <RiArrowLeftLine onClick={moveToBack} size='24' />,
	share: <RiShareBoxLine size='20' />,
	like: <RiHeartLine size='20' className='fill-100' />,
	trashCan: <FiTrash2 size='20' className='text-100' />,
	check: <RiCheckFill size='20' className='fill-100' />,
	more: <RiMore2Fill size='20' />,
};

interface HeaderRightProps {
	right: Right[] | Right;
	button: React.ReactNode;
}

export default function HeaderRight({ right, button }: HeaderRightProps) {
	const desiredOrder: Right[] = ['share', 'like', 'more'];

	// TODO: 상단 고정 css
	return (
		<div className='flex gap-3.5'>
			{Array.isArray(right) ? (
				iconSort(right, desiredOrder).map(
					(icon: Right) => icon && rightIcons[icon]
				)
			) : (
				<>{right && rightIcons[right]}</>
			)}
			{button && <>{button}</>}
		</div>
	);
}

/**
 * 주어진 아이콘 배열을 디자인대로 정렬합니다.
 */
const iconSort = (arr: Right[], order: Right[]) => {
	// order 배열에 있는 순서대로 정렬합니다.
	arr.sort((a, b) => {
		const aIndex = order.indexOf(a);
		const bIndex = order.indexOf(b);

		// order 배열에 없는 요소는 맨 뒤로 보냅니다.
		if (aIndex === -1) return 1;
		if (bIndex === -1) return -1;

		return aIndex - bIndex;
	});

	return arr;
};
/**
 * NOTE:
 * search, share, like, trash, check, RoundButton, none
 */
