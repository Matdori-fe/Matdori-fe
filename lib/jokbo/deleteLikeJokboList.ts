import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';

export const deleteLikeJokboList = async (list: Set<number>) => {
	return axios
		.post(
			`/users/${getUserIndex()}/favorite-jokbos`,
			{ favoriteJokbosId: [...list] },
			{ withCredentials: true }
		)
		.then((r) => console.log(r));
};
