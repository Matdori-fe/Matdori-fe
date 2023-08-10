'use client';

import BorderNotification from '@/components/BorderNotification/BorderNotification';
import Input from '@/components/Input/Input';
import RoundButton from '@/components/RoundButton/RoundButton';
import SmallTitle from '@/components/Title/SmallTitle';
import { useRecoilState } from 'recoil';
import { RegisterEmailAtom } from '../../status/RegisterEmailAtom';
import { useCallback, useEffect, useState } from 'react';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import axios from 'axios';
import Button from '@/components/Button/Button';
import { IsGoTimer, TimerAtom } from '../../status/TimerAtom';
import { Validation, validationNotification } from './validation';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';

type Props = {
	searchParams: { modal: boolean };
};

// FIXME: 타이머를 구독함으로써 이 페이지 전체가 재렌더링됨

export default function Registration({ searchParams }: Props) {
	const router = useRouter();
	const showModal = searchParams?.modal;

	// 타이머를 사용하기 위한 state
	const [seconds, setSeconds] = useRecoilState(TimerAtom);
	const [handleTimer, setHandleTimer] = useRecoilState(IsGoTimer);

	// 이메일 입력을 위한 state
	const [email, setEmail] = useRecoilState(RegisterEmailAtom);

	// 메일, 인증번호 유효성 검사를 위한 장치
	const [valid, setValid] = useState<Validation>({
		email: undefined,
		code: undefined,
	});

	const [code, setCode] = useState('');

	// TODO: 주황색 오류는 함수선언을 useEffect안으로 옮기면 해결된다고 한다. 굳이?
	// email의 값이 변경될 때마다 유효성 검사
	useEffect(() => {
		emailValidation();
	}, [email]);

	// 인증 코드의 값이 변경될 때마다 유효성 검사
	useEffect(() => {
		codeValidation();
	}, [code]);

	// 메일 유효성 검사
	const emailValidation = useCallback(() => {
		// 첫 진입시 오류메세지를 띄우지 않기 위함
		if (email === '') return;

		setValid((prev) => ({ ...prev, email: 'invalidForm' }));

		if (email.endsWith('@inha.ac.kr') || email.endsWith('@inha.edu')) {
			setValid((prev) => ({ ...prev, email: 'valid' }));
		}
	}, [email]);

	// 인증번호 전송
	const postVerificationCode = async () => {
		try {
			const result = await axios.post(
				`${process.env.NEXT_PUBLIC_API}/email-authentication`,
				{
					email,
				},
				{ withCredentials: true }
			);

			if (handleTimer === true) setSeconds(300);
			setHandleTimer(true);
		} catch (error: any) {
			const status = error.response.status;

			// 이메일란이 비어있는 경우
			if (status === 400) {
				setValid((prev) => ({ ...prev, email: 'empty' }));
			}
			// 중복된 이메일인 경우
			if (status === 409) {
				setValid((prev) => ({ ...prev, email: 'duplication' }));
			}

			if (status === 500) {
				Toast('서버 에러');
			} else {
				Toast('서버 에러');
			}
		}
	};

	// 인증 코드 검사
	const codeValidation = async () => {
		if (code === '') return;

		setValid((prev) => ({ ...prev, code: 'invalidCode' }));

		try {
			const result = await axios.post(
				`${process.env.NEXT_PUBLIC_API}/authentication-number`,
				{
					number: code,
					type: 'SIGNUP',
				},
				{
					withCredentials: true,
				}
			);

			setValid((prev) => ({ ...prev, code: 'valid' }));
		} catch (error: any) {
			// TODO: 잘못된 인증번호 구분

			if (error.response.status === 400) {
				setValid((prev) => ({ ...prev, code: 'invalidCode' }));
			}

			// 시간초과
			if (error.response.status === 401) {
				// FIXME: 임시로 잘못된 인증번호 구분
				if (code.length !== 10)
					setValid((prev) => ({ ...prev, code: 'invalidCode' }));
				else setValid((prev) => ({ ...prev, code: 'timeOver' }));
			}

			if (error.response.status === 500) {
				Toast('서버 에러');
			}
		}
	};

	return (
		<div className='w-full [&>*]:mb-[12px]'>
			<SmallTitle>학교 이메일</SmallTitle>
			<Input
				placeHolder='학교 이메일을 입력해주세요.'
				inputSize='small'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{valid.email && (
				<CheckNotification
					variant={validationNotification.email[valid.email].variant}
					label={validationNotification.email[valid.email].label}
				/>
			)}
			<div className='mb-[6px] h-[1px]' />
			<SmallTitle
				sideComponent={
					<RoundButton label='인증번호 발송' onClick={postVerificationCode} />
				}
			>
				인증번호
			</SmallTitle>
			<Input
				placeHolder='인증번호를 입력해주세요.'
				inputSize='small'
				value={code}
				onChange={(e) => setCode(e.target.value)}
				right='fiveMinTimer'
			/>
			{valid.code && (
				<CheckNotification
					variant={validationNotification.code[valid.code].variant}
					label={validationNotification.code[valid.code].label}
				/>
			)}
			<BorderNotification label='※ 입력한 이메일로 발송된 인증번호를 입력해주세요.' />
			<Button
				label='학교 이메일 인증하기'
				variant={
					valid.email === 'valid' && valid.code === 'valid'
						? 'active'
						: 'inactive'
				}
				errorMessage='모든 항목을 입력해주세요.'
				onClick={() => router.push('/signup/password')}
			/>
		</div>
	);
}

/**
 * [x] : 이메일 다른 페이지에서 사용해야 하므로 어디에 저장해두기
 * [x] : 이메일 실시간 검증
 * [x] : 올바른 이메일임이 확인되면 파란 안내 메세지 아니라면 붉은 안내 메세지
 * [x] : 클릭하면 타이머 시작하게. 지금은 한번 클릭하면 계속 시작 상태로 유지됨
 * [x] : 메일 중복
 * [ ] : 파란 상태에서 이메일 인증 클릭하면 인증 메일 보내기
 * [ ] : 인증 번호 실시간으로 검증
 * [ ] : 올바른 인증번호면 파란 안내 메세지, 아니라면 붉은 안내 메세지
 * [ ] : 인증하기 버튼을 클릭하면 비밀번호 입력받는 페이지로 이동
 */
