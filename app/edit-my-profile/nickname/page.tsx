'use client';

import BorderNotification from '@/components/BorderNotification/BorderNotification';
import Button from '@/components/Button/Button';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import Input from '@/components/Input/Input';
import SmallTitle from '@/components/Title/SmallTitle';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
	INicknameValidationKey,
	nicknameErrorMessage,
} from './nicknameErrorMessage';
import { nicknameValidationFn } from '@/utils/nickname/nicknameValidation';
import { changeNickname } from '@/lib/nickname/changeNickname';
import { getNickname } from '@/utils/nickname/getNickname';

export default function Nickname() {
	const [nickname, setNickname] = useState<string>('');
	const [nicknameErrorType, setNicknameErrorType] =
		useState<INicknameValidationKey>('min');

	const router = useRouter();

	useEffect(() => {
		nicknameValidationFn(nickname, setNicknameErrorType);
	}, [nickname]);

	const name = getNickname();

	return (
		<div className='flex flex-col gap-[16px]'>
			<SmallTitle>닉네임</SmallTitle>
			<Input
				placeHolder='새로운 닉네임을 입력해주세요.'
				inputSize='small'
				value={nickname}
				onChange={(e) => setNickname(e.target.value)}
			/>
			<CheckNotification
				variant={nicknameErrorMessage[nicknameErrorType].variant}
				label={nicknameErrorMessage[nicknameErrorType].label}
			/>
			<BorderNotification label='※ 부적절한 닉네임을 사용하는 경우, 맛도리 서비스 이용에 불이익이 발생할 수 있습니다.' />
			<Button
				label='닉네임 변경하기'
				variant={
					nicknameErrorMessage[nicknameErrorType].variant === 'valid'
						? 'active'
						: 'inactive'
				}
				errorMessage='올바른 닉네임을 입력해주세요.'
				onClick={() => changeNickname(nickname, setNicknameErrorType)}
			/>
		</div>
	);
}

// TODO: 초기 진입시 체크노티 안띄우기.
// TODO: 로컬에 저장해둔 닉네임 새로 받은걸로 갈아끼기
