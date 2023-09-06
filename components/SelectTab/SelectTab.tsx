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
		animation-duration: 3s;
		animation-iteration-count: 2;
		animation-timing-function: ease-in;
		animation-direction: normal;
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

	console.log(section);

	const animateUnderLine = () => {
		if (sectionList.length === 2)
			return sectionList[0].id === section ? 0 : '100%';
		// 탭의 아이템 개수가 3개인 경우
		else {
			if (sectionList[0].id === section) return 0;
			if (sectionList[1].id === section) return '100%';
			if (sectionList[2].id === section) return '200%';
		}
	};

	const underlineWidth = () => {
		if (sectionList.length === 2) return 'w-[calc(50%)]';
		// 탭의 아이템 개수가 3개인 경우
		else return 'w-[calc(33.3%)]';
	};

	return (
		<motion.div
			className={
				type === 'none'
					? 'z-10 sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray bg-white'
					: 'z-10 sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray bg-white fixed top-0'
			}
		>
			<motion.ul className='relative flex overflow-hidden'>
				{sectionList.map(({ id, name }) => (
					<motion.li
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
						{/* {section === id && ( */}

						{/* )} */}
					</motion.li>
				))}
			</motion.ul>
			<Underline
				transition={{ type: 'spring', duration: 0.5 }}
				// transition={{ type: 'inertia', velocity: 50 }}
				animate={{ x: animateUnderLine() }}
				listLength={sectionList.length}
				className={`absolute border-b-[2px] border-100 ${underlineWidth()} bottom-[-2px]`}
			/>
		</motion.div>
	);
}

// FIXME: framer motion에서 path변경시 모션이 이상하게 동작함
// ${
// 	sectionList[0].id === section ? 'left-0' : 'right-0'
// }
