import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';

export const deleteLikeShopList = async (list: Set<number>) => {
	return axios
		.post(
			`/users/${getUserIndex()}/favorite-stores`,
			{ favoriteStoresId: [...list] },
			{ withCredentials: true }
		)
		.then((r) => console.log(r));
};
