import axios from 'axios';
import { CommonResponse } from '../CommonResponse';
import { getUserIndex } from '@/hooks/my-likes/useDelete';
// import { axios } from '../axios';

// export const deleteMyComment = async (
// 	jokboId: number,
// 	commentId: number
// ): Promise<CommonResponse<{}>> => {
// 	return await axios.delete(`/jokbos/${jokboId}/comments/${commentId}`, {
// 		withCredentials: true,
// 	});
// };

export const deleteMyComment = async (jokboId: number, commentId: number) => {
	return await axios.delete(
		`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboId}/comments/${commentId}`,

		{
			params: {
				userIndex: getUserIndex(),
			},
			withCredentials: true,
		}
	);
};
