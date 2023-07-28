'use client';
// NOTE: 이거 안써줘도 클라이언트로 동작하는 것 같은데 왜그렇지?

import { RiArrowLeftLine } from 'react-icons/ri';
import { Left } from './Header';
import Image from 'next/image';
import logo from '../../assets/image/logo.svg';
import { moveToTop } from '@/utils/page/moveToTop';
import { moveToBack } from '@/utils/page/moveToBack';

const leftIcons = {
	back: <RiArrowLeftLine onClick={moveToBack} size='24' />,
	logo: <Image onClick={moveToTop} src={logo} alt='logo' />,
};

export default function HeaderLeft({
	left,
	className,
}: {
	left: Left;
	className: string;
}) {
	return (
		<>
			{left && <button className={className}>{left && leftIcons[left]}</button>}
		</>
	);
}

// FIXME: back일 때 클릭 영역이 작음. 이것이 문제가 될 지는 실제 손꾸락으로 봐야 알 것 같아서 .. 나중에 고쳐봄
