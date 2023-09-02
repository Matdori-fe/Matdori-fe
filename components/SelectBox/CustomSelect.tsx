'use client';

import { None } from '@/stories/components/Header.stories';
import React, { useState } from 'react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import Select from 'react-select';
import Text from '../Text/Text';
import { AnimatePresence, motion } from 'framer-motion';

// FIXME: 타입 수정 필요
type InFunction = {
	onSelectChange: (value: string) => void;
};

const selectList = [
	{ value: 'day', label: '최신순' },
	{ value: 'like', label: '좋아요순' },
	{ value: 'jokbo', label: '족보순' },
];
//type ValueType = "day" | "like" | "jokbo";

const CustomSelect = ({ onSelectChange }: InFunction) => {
	const handleSelectChange = (selectedOption: any) => {
		onSelectChange(selectedOption); // 선택된 옵션의 value를 onSelectChange에 전달
		setSelected(selectedOption);
		setIsOpen(!isOpen);
	};

	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(selectList[0].label);

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30,
	};

	return (
		<div className='relative flex flex-col items-end py-[6px] min-w-max'>
			<button onClick={() => setIsOpen(!isOpen)}>
				<div className='flex items-center gap-[5px]'>
					<Text size='xs'>{selected}</Text>
					<motion.div
						animate={{
							rotate: isOpen ? 180 : 0,
						}}
					>
						<RiArrowDownLine size='12' />
					</motion.div>
				</div>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.1 }}
						exit={{ opacity: 0 }}
						className='border border-lightGray rounded-basic px-[16px] py-[9px] shadow-md absolute bg-white top-[36px] min-w-max right-0'
					>
						{selectList.map((item) => (
							<li key={item.value}>
								<button
									className='py-[8px]'
									onClick={() => handleSelectChange(item.label)}
								>
									<Text size='xs' color={`${item.label === selected && '100'}`}>
										{item.label}
									</Text>
								</button>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CustomSelect;

// <Select
// defaultValue={selectList[0]}
// options={selectList}
// onChange={handleSelectChange}
// styles={{
// 	control: (baseStyles, state) => ({
// 		...baseStyles,
// 		width: '110px',
// 		height: '20px',
// 		font: 'Regular',
// 		fontSize: '12px',
// 		border: 'none',
// 		borderRadius: '15px',
// 	}),
// 	option: (baseStyles, state) => ({
// 		...baseStyles,
// 		borderRadius: '15px',
// 		color: state.isSelected ? '#EC6262' : 'black',
// 		backgroundColor: state.isSelected ? 'white' : 'white',
// 		fontSize: '12px', // 예시: 글꼴 크기 변경
// 	}),
// }}
// theme={(theme) => ({
// 	...theme,
// 	borderRadius: 0,
// 	border: None,
// 	colors: {
// 		...theme.colors,
// 		primary: '#EC6262',
// 	},
// })}
// />
