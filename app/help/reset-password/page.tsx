'use client';

import Input from '@/components/Input/Input';
import SmallTitle from '@/components/Title/SmallTitle';
import { useEffect, useState } from 'react';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import Button from '@/components/Button/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PasswordAtom } from '@/status/PasswordAtom';
import {
	Validation,
	validationNotification,
} from '@/app/signup/password/passwordValidation';
import axios from 'axios';
import { RegisterEmailAtom } from '@/status/RegisterEmailAtom';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';

export default function Registration() {
	// 비밀번호 상태
	const [input, setInput] = useRecoilState(PasswordAtom);

	//
	const [passwordValidationType, setPasswordValidationType] =
		useState<Validation>({
			password: undefined,
			rePassword: undefined,
		});

	useEffect(() => {
		validatePassword();
	}, [input.password]);

	const validatePassword = () => {
		if (input.password === '') return;

		setPasswordValidationType((prev) => ({ ...prev, password: 'invalidForm' }));

		const passwordPattern =
			/^(?=.*[a-z])(?=.*\d)(?=.*[@$!^%*?&])[a-zA-Z\d@$!^%*?&]{8,16}$/;

		if (passwordPattern.test(input.password)) {
			setPasswordValidationType((prev) => ({ ...prev, password: 'valid' }));
		}
	};

	useEffect(() => {
		validateRePassword();
	}, [input.password, input.rePassword]);

	const validateRePassword = () => {
		if (input.rePassword === '') return;

		setPasswordValidationType((prev) => ({ ...prev, rePassword: 'notMatch' }));

		if (input.password === input.rePassword) {
			setPasswordValidationType((prev) => ({ ...prev, rePassword: 'valid' }));
		}
	};

	const email = useRecoilValue(RegisterEmailAtom);
	const router = useRouter();

	const resetPassword = async () => {
		try {
			const result = await axios.put(
				`${process.env.NEXT_PUBLIC_API}/password`,
				{
					email,
					password: input.password,
				},
				{
					withCredentials: true,
				}
			);

			// 성공하면 이동
			router.push('/login');
		} catch (error: any) {
			console.log(error);
			const status = error.response.status;

			// TODO: 이메일 인증 안된거 \

			// 이메일 또는 비밀번호 누락 또는 형식안맞음
			if (status === 400) {
				Toast('email 또는 password의 누락 혹은 형식 안 맞음.');
			} else if (status === 500) {
				Toast('서버 에러');
			} else {
				Toast('서버 에러');
			}
		}
	};

	return (
		<div className='w-full [&>*]:mb-[12px]'>
			<div>{email}</div>

			<SmallTitle>새 비밀번호</SmallTitle>
			<Input
				type='password'
				placeHolder='영어 + 숫자 + 특수문자 포함 8~16자'
				inputSize='small'
				value={input.password}
				onChange={(e) =>
					setInput((prev) => ({ ...prev, password: e.target.value }))
				}
			/>
			{passwordValidationType.password && (
				<CheckNotification
					variant={
						validationNotification.password[passwordValidationType.password]
							.variant
					}
					label={
						validationNotification.password[passwordValidationType.password]
							.label
					}
				/>
			)}
			<div className='mb-[6px] h-[1px]' />

			<SmallTitle>새 비밀번호 확인</SmallTitle>
			<Input
				type='password'
				placeHolder='비밀번호를 한 번 더 입력해주세요.'
				inputSize='small'
				value={input.rePassword}
				onChange={(e) =>
					setInput((prev) => ({ ...prev, rePassword: e.target.value }))
				}
			/>
			{passwordValidationType.rePassword && (
				<CheckNotification
					variant={
						validationNotification.rePassword[passwordValidationType.rePassword]
							.variant
					}
					label={
						validationNotification.rePassword[passwordValidationType.rePassword]
							.label
					}
				/>
			)}

			<Button
				variant={
					passwordValidationType.password === 'valid' &&
					passwordValidationType.rePassword === 'valid'
						? 'active'
						: 'inactive'
				}
				onClick={() => {
					resetPassword();
				}}
				errorMessage='모든 항목을 입력해주세요.'
				label='비밀번호 변경 완료하기'
			/>
		</div>
	);
}

/**
 * [ ] 모든 란이 다 채워지면 버튼 활성화
 * [ ] 버튼 누르면 회원가입 api 전송
 */
