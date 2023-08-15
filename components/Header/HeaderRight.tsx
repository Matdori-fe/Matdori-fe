'use client';

import {
	RiArrowLeftLine,
	RiCheckFill,
	RiHeartLine,
	RiMore2Fill,
	RiSearch2Line,
	RiShareBoxLine,
} from 'react-icons/ri';
import { Right } from './Header';
import { moveToBack } from '@/utils/page/moveToBack';
import { FiTrash2 } from 'react-icons/fi';
import RoundButton from '../RoundButton/RoundButton';
import { useRouter } from 'next/navigation';

// TODO: 라운드 버튼의 height가 큰거 수정
// TODO: button의 onClick수정하기.
// FIXME: 원래는 RoundButton을 밖으로 뺴서 받아왔는데, 그렇게하니까 onClick을 못받음. 만약 이걸 사용하는 곳이 많아진다면 어떻게 해결해야하지? 지금은 하드코딩으로 해두었다.
const rightIcons = {
	search: <RiSearch2Line onClick={moveToBack} size='24' />,
	share: <RiShareBoxLine size='20' />,
	like: <RiHeartLine size='20' className='fill-100' />,
	trashCan: <FiTrash2 size='20' className='text-100' />,
	check: <RiCheckFill size='20' className='fill-100' />,
	more: <RiMore2Fill size='20' />,
	roundButton: <RoundButton label='내 정보 수정하기' onClick={} />,
};

interface HeaderRightProps {
	right: Right[] | Right;
}

export default function HeaderRight({ right }: HeaderRightProps) {
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
		</div>
	);
}

// TODO: 하트 누르고 취소하고 가능하게 로직 만들기
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
