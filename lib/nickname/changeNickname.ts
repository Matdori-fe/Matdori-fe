import { getUserIndex } from '@/hooks/my-likes/useDelete';
import { axios } from '../axios';
import { AxiosError } from 'axios';
import { nicknameErrorMessage } from '@/app/edit-my-profile/nickname/nicknameErrorMessage';
import Toast from '@/components/Toast/Toast';
import { useRouter } from 'next/navigation';

export async function changeNickname(nickname: string) {
	try {
		const response = await axios.put(
			`/users/${getUserIndex()}/nickname`,
			{ nickname },
			{ withCredentials: true }
		);

		const newNickname = response.data.result.nickname;

		const storedData = JSON.parse(localStorage.getItem('recoil-persist')); // 로컬 스토리지에서 데이터 가져오기
		storedData.user.nickname = newNickname; // 닉네임 수정

		localStorage.setItem('recoil-persist', JSON.stringify(storedData)); // 수정된 데이터 로컬 스토리지에 저장

		window.location.href = '/view/my?tab=my';
	} catch (e) {
		const { response } = e as AxiosError;

		if (response?.status === 409) Toast(nicknameErrorMessage.duplication.label);
		else if (response?.status === 500) Toast('서버 에러');
		else Toast('알수 없는 에러 발생.');
	}
}
