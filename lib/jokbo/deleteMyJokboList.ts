import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';

export const deleteMyJokboList = async (list: Set<number>) => {
	return axios
		.post(
			`/users/${getUserIndex()}/jokbos`,
			{ jokboIdList: [...list] },
			{ withCredentials: true }
		)
		.then((r) => console.log(r));
};
