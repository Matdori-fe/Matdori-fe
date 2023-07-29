import { atom } from 'recoil';

export const SortListAtom = atom<string[]>({
	key: 'sortList',
	default: ['별점', '음식 맛', '가성비', '청결'],
});
