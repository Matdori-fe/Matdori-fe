import { CommonResponse } from '../CommonResponse';
import { axios } from '../axios';

interface RecommendedShopItem {
	storeId: number;
	name: string;
	totalRating: number;
	imgUrl: string;
}

export type RecommendedShopList = CommonResponse<RecommendedShopItem[]>;

export async function getRecommendedShopList() {
	return await axios.get('/recommended-store');
}
