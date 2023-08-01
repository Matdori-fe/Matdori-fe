import { useRecoilState } from 'recoil';
import Text from '../Text/Text';
import { SelectTabAtom, SelectTabVariant } from '@/app/status/SelectTabAtom';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

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
	const [tab, setTab] = useRecoilState(SelectTabAtom(variant));

	const handleSelected = (e: React.MouseEvent<HTMLLIElement>) => {
		setTab(({ variant, lists, selected }) => ({
			variant,
			lists,
			selected: e.currentTarget.innerText,
		}));
	};

	return (
		<div className='sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray'>
			<ul className='flex'>
				{tab.lists.map((name) => (
					<li
						key={name}
						className='relative flex justify-center grow'
						onClick={(e) => handleSelected(e)}
					>
						<Text
							size='sm'
							fontWeight='bold'
							color={tab.selected === name ? '100' : 'gray'}
						>
							{name}
						</Text>
						{tab.selected === name && (
							<Underline
								listLength={tab.lists.length}
								layoutId='underline'
								className='absolute border-b-[2px] border-100 top-[34px]'
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
