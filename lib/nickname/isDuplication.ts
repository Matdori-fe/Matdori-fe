import { AxiosError } from 'axios';
import { axios } from '../axios';
import Toast from '@/components/Toast/Toast';

async function isDuplicationAxios(nickname: string) {
	return await axios.get('/nickname', { params: { nickname } });
}

export async function isDuplication(nickname: string) {
	try {
		const response = await isDuplicationAxios(nickname);

		return false;
		// 중복 없으면 그냥 통과
	} catch (e) {
		const { response } = e as AxiosError;

		if (response?.status === 409) return true;
		if (response?.status === 500) Toast('서버 에러');
	}
}
