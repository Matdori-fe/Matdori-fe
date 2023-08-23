import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';

export const deleteLikeJokboList = async (list: number[]) => {
	return axios.post(
		`/users/${getUserIndex()}/favorite-jokbos`,
		{ favoriteJokbosId: list },
		{ withCredentials: true }
	);
};
