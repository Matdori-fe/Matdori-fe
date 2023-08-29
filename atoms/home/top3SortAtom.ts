import { CommonResponse } from '@/lib/CommonResponse';
import { atom } from 'recoil';

export type SortType = '별점' | '음식 맛' | '가성비' | '청결';

export interface Top3Item {
	storeIndex: number;
	name: string;
	totalRating: number;
	flavorRating: number;
	cleanRating: number;
	underPricedRating: number;
	imgUrl: string;
}

export type Top3List = CommonResponse<Top3Item[]>;

export const top3SortAtom = atom<SortType>({
	key: 'top3SortAtom',
	default: '별점',
});
