import { atom } from 'recoil';

// 타이머 시간 number atom => 남은 시간에 대한 값
export const TimerAtom = atom<number>({
	key: 'TimerAtom',
	default: 300,
});

// 타이머 시작 boolean atom => 값이 true면 Timer 작동, false면 종료
export const IsGoTimer = atom<boolean>({
	key: 'IsGoTimer',
	default: false,
});
