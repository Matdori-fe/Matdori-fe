import { useQuery } from 'react-query';
import Toast from '@/components/Toast/Toast';
import { AxiosError } from 'axios';
import { axios } from '../axios';

export async function logoutAxios() {
	return await axios.post('/logout', {}, { withCredentials: true });
}

export async function logout() {
	try {
		const data = await logoutAxios();

		console.log(data);
		Toast('로그아웃 되었습니다.');
		// 로그인으로 이동
		setTimeout(() => (window.location.href = '/login'), 1000);
	} catch (e) {
		const { response } = e as AxiosError;

		Toast(`로그아웃이 실패했습니다.\n다시 시도해주세요.`);
	}
}
