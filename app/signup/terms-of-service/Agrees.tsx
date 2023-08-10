'use client';

import { useState } from 'react';
import Agree from './Agree';
import Button from '@/components/Button/Button';
import { RegisterEmailAtom } from '@/app/status/RegisterEmailAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PasswordAtom } from '@/app/status/PasswordAtom';
import { DepartmentAtom } from '@/app/status/DepartmentAtom';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';
import { scrollToBottom } from '@/utils/page/moveToBottom';

// TODO: 여기에 회원가입 로직이 존재함. 리펙터링 필요
const agreeList = [
	'이용 약관에 동의합니다.',
	'개인정보 수집 및 이용에 동의합니다.',
	'만 14세 이상입니다.',
];

export default function Agrees() {
	const router = useRouter();
	const [checkList, setCheckList] = useState<string[]>([]);
	const [email, setEmail] = useRecoilState(RegisterEmailAtom);
	const [password, setPassword] = useRecoilState(PasswordAtom);
	const department = useRecoilValue(DepartmentAtom);

	const signup = async () => {
		try {
			const result = await axios.post(
				`${process.env.NEXT_PUBLIC_API}/sign-up`,
				{
					email,
					password: password.password,
					department,
				},
				{
					withCredentials: true,
				}
			);

			// 메일, 비번 초기화
			setEmail('');
			setPassword({ password: '', rePassword: '' });

			// 이동
			router.push('/signup/complete');
		} catch (error: any) {
			// console.log(error.response.status);
			const status = error.response.status;

			// 다시 인증
			if (status === 400) {
				Toast('입력되지 않은 항목이 있습니다.');
			}

			if (status === 409) {
				Toast('이미 존재하는 회원입니다.');
			}

			if (status === 500) {
				Toast('서버 오류');
			} else {
				Toast('서버 에러');
			}
		}

		// const { status } = result.data;

		// if (status === 200) {
		// 	console.log('회원가입 완료');
		// 	router.push('/signup/complete');
		// }

		// if (status === 401) {
		// 	console.log('회원가입 실패');
		// 	setError('errer');
		// 	Toast('메일 인증을 다시 진행해주세요.');
		// }

		// if (status === 409) {
		// 	console.log('회원가입 실패');
		// 	Toast('이미 가입된 회원입니다.');
		// }
	};

	return (
		<>
			{agreeList.map((item) => (
				<>
					<Agree
						label={item}
						variant={checkList.includes(item) ? 'check' : 'unCheck'}
						onClick={() => {
							if (checkList.includes(item))
								setCheckList(checkList.filter((i) => i !== item));
							else setCheckList((prev) => [...prev, item]);
						}}
					/>
				</>
			))}

			<Button
				variant='active'
				label={checkList.length === 3 ? '회원가입 완료하기' : '모두 동의하기'}
				onClick={
					checkList.length === 3
						? () => {
								signup();
						  }
						: () => {
								scrollToBottom();

								setCheckList([...agreeList]);
						  }
				}
			/>
		</>
	);
}

/**
 * 다 입력 안했으면 토스트로 에러 메세지 띄워야함
 * 다 선택했으면 버튼 이름 바꾸고 페이지 이동으로 바꾼다.
 */
