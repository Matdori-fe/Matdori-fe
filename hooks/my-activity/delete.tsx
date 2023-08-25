import axios from 'axios';
import { getUserIndex } from '../my-likes/useDelete';

export const deleteMyJokbo = async (jokboIndex: number) => {
	return await axios.delete(
		`${
			process.env.NEXT_PUBLIC_API
		}/users/${getUserIndex()}/jokbos/${jokboIndex}`,
		{
			withCredentials: true,
		}
	);
};
