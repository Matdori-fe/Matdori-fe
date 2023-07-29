import { atom } from 'recoil';

// FIXME: 리펙토링 해야함
export const SortListAtom = atom<string[]>({
	key: 'sortList',
	default: ['별점', '음식 맛', '가성비', '청결'],
});

export const SelectedSortAtom = atom<boolean[]>({
	key: 'SelectedSort',
	default: [true, false, false, false],
});
