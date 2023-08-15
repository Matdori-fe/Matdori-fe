import { atom } from 'recoil';

export type Sort = '최신순' | '별점 높은 순' | '족보 많은 순';

export const selectedSort = atom<Sort>({
	key: 'selectedSort',
	default: '최신순',
});
