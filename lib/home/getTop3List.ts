import { SortType } from '@/atoms/home/top3SortAtom';
import { axios } from '../axios';

export async function getTop3List(sortType: SortType) {
	return await axios.get(`/matdori-top3?order=${sortType}`);
}
