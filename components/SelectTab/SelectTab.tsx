'use client';

import { useRecoilState, useRecoilValue } from 'recoil';
import Text from '../Text/Text';
import { SelectTabAtom, SelectTabVariant } from '@/app/status/SelectTabAtom';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';

interface SelectBarProps {
	variant: SelectTabVariant;
}

const Underline = styled(motion.div)<{
	listLength: number;
	layoutId: string;
	className: string;
}>`
	@media (min-width: 412px) {
		width: calc(412px / ${({ listLength }) => listLength});
	}
`;

export default function SelectTab() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab');
	const section = searchParams.get('section');

	// FIXME: ~ 형식의 인수는 어쩌고
	const sectionList = useRecoilValue(SelectTabAtom(tab));

	return (
		<div className='sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray'>
			<ul className='flex'>
				{sectionList.map(({ id, name }) => (
					<li
						key={id}
						className='relative flex justify-center grow'
						onClick={() => router.push(`?tab=${tab}&section=${id}`)}
					>
						<Text
							size='sm'
							fontWeight='bold'
							color={section === id ? '100' : 'gray'}
						>
							{name}
							<div></div>
						</Text>
						{section === id && (
							<Underline
								listLength={sectionList.length}
								layoutId='underline'
								className='absolute border-b-[2px] border-100 top-[34px] w-full'
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
