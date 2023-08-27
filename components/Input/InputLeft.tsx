'use client';

import { RiSearch2Line, RiArrowLeftLine } from 'react-icons/ri';
import { moveToBack } from '@/utils/page/moveToBack';
import Back from './Back';
type Left = {
	lense: React.ReactNode;
	back: React.ReactNode;
};

const leftContent: Left = {
	lense: <RiSearch2Line className='mr-[10px] w-[14px]' />,
	back: <Back />,
};

export default leftContent;
