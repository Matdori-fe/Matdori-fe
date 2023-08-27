import { CommonResponse } from '../CommonResponse';
import { axios } from '../axios';

interface RecommendedMenuItem {
	storeId: number;
	storeName: string;
	menuName: string;
	totalRating: number;
	imgUrl: string;
}

export type RecommendedMenuList = CommonResponse<RecommendedMenuItem[]>;

export async function getRecommendedMenuList() {
	return await axios.get('/recommended-menu');
}
