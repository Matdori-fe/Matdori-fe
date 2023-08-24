import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';

export const deleteMyCommentList = async (list: Set<number>) => {
	return axios
		.post(
			`/users/${getUserIndex()}/comments`,
			{ jokboCommentIdList: [...list] },
			{ withCredentials: true }
		)
		.then((r) => console.log(r));
};
