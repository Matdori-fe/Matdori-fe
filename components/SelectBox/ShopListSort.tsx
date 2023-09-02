'use client';

import React, { useState } from 'react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import Text from '../Text/Text';
import { AnimatePresence, motion } from 'framer-motion';

// FIXME: 타입 수정 필요
type InFunction = {
	onSelectChange: any;
};

const selectList = [
	{ value: 'star', label: '별점' },
	{ value: 'taste', label: '음식 맛' },
	{ value: 'underCost', label: '가성비' },
	{ value: 'clean', label: '청결' },
];
//type ValueType = "day" | "like" | "jokbo";

const ShopListSort = ({ onSelectChange }: InFunction) => {
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
		<div className='relative flex flex-col items-end py-[10px] min-w-max z-10'>
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

export default ShopListSort;
