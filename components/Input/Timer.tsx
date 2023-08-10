'use client';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TimerAtom } from '@/status/TimerAtom';
import { IsGoTimer } from '@/status/TimerAtom';

const FiveMinTimer: React.FC = () => {
	//5분을 세주는 타이머 => state는 초 기준, 5분은 300초
	const [seconds, setSeconds] = useRecoilState(TimerAtom);
	//true:측정 시작, false면 측정 안함
	const [goTime, setGoTime] = useRecoilState(IsGoTimer);

	useEffect(() => {
		if (goTime === true) {
			const timer = setInterval(() => {
				setSeconds((prev) => {
					if (prev === 0) {
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [goTime]);

	function showTime(second: number): string {
		var minute = Math.floor(second / 60);
		second = second % 60;
		if (second >= 10) {
			return minute + ':' + second;
		}
		return minute + ':0' + second;
	}

	const Timer: React.FC = () => {
		return (
			<>
				{goTime === true ? (
					<div className='text-100 font-Medium'>{showTime(seconds)}</div>
				) : (
					<div className='text-gray font-Medium'>{showTime(seconds)}</div>
				)}
			</>
		);
	};

	return (
		<>
			<Timer />
		</>
	);
};

export default FiveMinTimer;
