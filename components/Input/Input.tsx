'use client';
import { useState } from 'react';
import leftContent from './InputLeft';
import rightContent from './InputRight';
import FiveMinTimer from './Timer';
import { IsGoTimer } from '@/app/status/TimerAtom';
import { useRecoilValue } from 'recoil';
import { ChangeEvent } from 'react';
// Input에 props로 줄 값 제한
type InputSize = 'small' | 'big';
type LeftKind = 'lense' | 'back';
type RightKind = 'cancel' | 'redArrow' | 'fiveMinTimer';

type InputType = {
	type?: string;
	inputSize: InputSize;
	placeHolder?: string;
	left?: LeftKind;
	right?: RightKind;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	leftOnClick?: () => void;
	rightOnClick?: () => void;
	value: string;
	onClick?: () => void;
	inputmode?: string;
	readonly: string;
};

const Input: React.FC<InputType> = ({
	type = 'text',
	inputSize,
	placeHolder,
	left,
	right,
	leftOnClick,
	rightOnClick,
	onChange,
	value,
	onClick,
	inputmode,
	readonly,
}) => {
	// input에 들어갈 값을 받아줄 state
	const [inputValue, setInputValue] = useState('');
	const goTime = useRecoilValue(IsGoTimer);
	//제일 상위 박스 CSS 정의
	var boxCSS = '';
	if (inputSize === 'small') {
		boxCSS =
			'w-[372px] sm:w-[calc(100%)] h-[40px] bg-lightGray flex justify-between items-center rounded-basic px-4 cursor-';
	} else if (inputSize === 'big') {
		boxCSS =
			'w-[392px] sm:w-[calc(100%-20px)] h-[40px] bg-lightGray flex justify-between items-center rounded-basic px-4 mx-[10px]';
	}
	return (
		<div className='flex justify-center w-full' onClick={onClick}>
			<div className={boxCSS}>
				<div className='flex items-center w-11/12'>
					{left === 'lense' ? (
						<div onClick={leftOnClick}>{leftContent.lense}</div>
					) : null}
					{left === 'back' ? leftContent.back : null}
					<input
						readonly={readonly && ''}
						inputmode={inputmode}
						className={`w-full h-[40px] bg-lightGray text-black placeholder-gray rounded-xl text-[14px] font-Medium`}
						value={value}
						type={type}
						placeholder={placeHolder}
						onChange={(e) => {
							setInputValue(e.target.value);
							// 콜백 함수 호출하여 입력 값 외부로 전달
							if (onChange) {
								onChange(e);
							}
						}}
					/>
				</div>
				<div>
					{right === 'cancel' ? (
						<div
							onClick={(e) => {
								setInputValue('');
								if (onChange) {
									//값을 초기화
									onChange({
										target: { value: '' },
									} as ChangeEvent<HTMLInputElement>);
								}
							}}
						>
							{rightContent.cancel}
						</div>
					) : null}
					{right === 'redArrow' ? (
						<div onClick={rightOnClick}>{rightContent.redArrow}</div>
					) : null}
					{right === 'fiveMinTimer' ? <FiveMinTimer /> : null}
				</div>
			</div>
		</div>
	);
};

export default Input;
