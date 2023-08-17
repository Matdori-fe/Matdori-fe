'use client';

import { None } from '@/stories/components/Header.stories';
import React from 'react';
import Select from 'react-select';

// FIXME: 타입 수정 필요
type InFunction = {
	onSelectChange: (value: string) => void;
};

const selectList = [
	{ value: 'day', label: '최신순' },
	{ value: 'like', label: '별점 높은 순' },
	{ value: 'jokbo', label: '족보 많은 순' },
];
//type ValueType = "day" | "like" | "jokbo";

const ShopListSort = ({ onSelectChange }: InFunction) => {
	const handleSelectChange = (selectedOption: any) => {
		onSelectChange(selectedOption.label); // 선택된 옵션의 value를 onSelectChange에 전달
	};

	return (
		<>
			<Select
				defaultValue={selectList[0]}
				options={selectList}
				onChange={handleSelectChange}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						width: '110px',
						height: '20px',
						font: 'Regular',
						fontSize: '12px',
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						color: state.isSelected ? 'white' : 'black',
						backgroundColor: state.isSelected ? '#EC6262' : 'white',
						fontSize: '12px', // 예시: 글꼴 크기 변경
					}),
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 0,
					border: None,
					colors: {
						...theme.colors,
						primary: '#EC6262',
					},
				})}
			/>
		</>
	);
};

export default ShopListSort;