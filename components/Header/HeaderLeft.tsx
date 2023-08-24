'use client';

import { RiArrowLeftLine } from 'react-icons/ri';
import { Left } from './Header';
import Image from 'next/image';
import logo from '../../assets/image/logo.svg';
import { moveToTop } from '@/utils/page/moveToTop';
import { moveToBack } from '@/utils/page/moveToBack';
import DeleteModeCancel from './DeleteModeCancel';

const leftIcons = {
	back: <RiArrowLeftLine onClick={moveToBack} size='24' />,
	logo: <Image onClick={moveToTop} src={logo} alt='logo' />,
};

export default function HeaderLeft({ left }: { left: Left }) {
	return <>{left === 'logo' ? leftIcons[left] : <DeleteModeCancel />}</>;
}

// FIXME: back일 때 클릭 영역이 작음. 이것이 문제가 될 지는 실제 손꾸락으로 봐야 알 것 같아서 .. 나중에 고쳐봄
