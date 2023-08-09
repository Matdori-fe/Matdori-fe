'use client';

import Input from '@/components/Input/Input';
import SmallTitle from '@/components/Title/SmallTitle';
import { useEffect, useState } from 'react';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import axios from 'axios';
import { Validation, validationNotification } from './passwordValidation';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';
import ModalContainer, {
	modals,
} from '@/components/ModalContainer/ModalContainer';
import { useRecoilState, useRecoilValue } from 'recoil';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import { useModal } from '@/hooks/useModal';
import { DepartmentAtom } from '@/app/status/DepartmentAtom';
import { PasswordAtom } from '@/app/status/PasswordAtom';

export default function Registration() {
	const router = useRouter();
	// 비밀번호 상태
	const [input, setInput] = useRecoilState(PasswordAtom);

	//
	const [passwordValidationType, setPasswordValidationType] =
		useState<Validation>({
			password: undefined,
			rePassword: undefined,
		});

	const department = useRecoilValue(DepartmentAtom);

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

	const { openModal } = useModal();

	const signup = async () => {
		const result = await axios(`${process.env.NEXT_PUBLIC_API}/sign-up`);
	};

	return (
		<div className='w-full [&>*]:mb-[12px]'>
			<SmallTitle>비밀번호</SmallTitle>
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

			<SmallTitle>비밀번호 확인</SmallTitle>
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
			<div className='mb-[6px] h-[1px]' />

			<SmallTitle>전공 선택</SmallTitle>
			<DepartmentModalOpener />

			<Button
				variant={
					passwordValidationType.password === 'valid' &&
					passwordValidationType.rePassword === 'valid' &&
					department !== ''
						? 'active'
						: 'inactive'
				}
				onClick={() => router.push('/signup/terms-of-service')}
				errorMessage='모든 항목을 입력해주세요.'
				label='다음 단계로 넘어가기'
			/>
			<ModalContainer />
		</div>
	);
}

/**
 * [ ] 모든 란이 다 채워지면 버튼 활성화
 * [ ] 버튼 누르면 회원가입 api 전송
 */
