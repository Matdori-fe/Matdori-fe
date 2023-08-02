import { useRecoilState, useRecoilValue } from 'recoil';
import Text from '../Text/Text';
import { SelectTabAtom, SelectTabVariant } from '@/app/status/SelectTabAtom';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';

interface SelectBarProps {
	variant: SelectTabVariant;
}

const StarWrapper = styled.div<{ score: number }>`
	width: ${(props) => props.score * 12}px;
`;

const Underline = styled(motion.div)<{
	listLength: number;
	layoutId: string;
	className: string;
}>`
	@media (min-width: 412px) {
		width: calc(412px / ${({ listLength }) => listLength});
	}
`;

export default function SelectTab({ variant }: SelectBarProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab');
	const section = searchParams.get('section');
	console.log(tab);
	console.log(section);

	const sectionList = useRecoilValue(SelectTabAtom(tab));
	console.log(sectionList);

	return (
		<div className='sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray'>
			<ul className='flex'>
				{sectionList.map(({ id, name }) => (
					<li
						key={id}
						className='relative flex justify-center grow'
						onClick={() => router.push(`/?tab=${tab}&section=${id}`)}
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
