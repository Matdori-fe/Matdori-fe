'use client';

import { useRecoilState, useRecoilValue } from 'recoil';
import Text from '../Text/Text';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { SelectTabAtom, SelectTabVariant } from '@/atoms/SelectTabAtom';
import { useEffect, useRef } from 'react';

interface SelectBarProps {
	variant: SelectTabVariant;
}

const Underline = styled(motion.div)<{
	listLength: number;
	className: string;
}>`
	@media (min-width: 412px) {
		width: calc(412px / ${({ listLength }) => listLength});
	}
`;

interface ISelectTab {
	type?: 'none' | 'sticky';
}

export default function SelectTab({ type = 'none' }: ISelectTab) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab') as SelectTabVariant;
	const section = searchParams.get('section');

	// FIXME: ~ 형식의 인수는 어쩌고
	const sectionList = useRecoilValue(SelectTabAtom(tab));
	const bo = useRef(null);

	return (
		<div
			className={
				type === 'none'
					? 'z-10 sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray bg-white'
					: 'z-10 sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray bg-white fixed top-0'
			}
		>
			<motion.ul className='flex'>
				{sectionList.map(({ id, name }) => (
					<li
						key={id}
						className='relative flex justify-center grow'
						onClick={() =>
							router.replace(`?tab=${tab}&section=${id}`, { scroll: false })
						}
					>
						<Text
							size='sm'
							fontWeight='bold'
							color={section === id ? '100' : 'gray'}
						>
							{name}
						</Text>
						{section === id && (
							<Underline
								key={id}
								listLength={sectionList.length}
								// layoutId='underline'
								className='absolute border-b-[2px] border-100 top-[34px] w-full'
							/>
						)}
					</li>
				))}
			</motion.ul>
		</div>
	);
}

// FIXME: framer motion에서 path변경시 모션이 이상하게 동작함
