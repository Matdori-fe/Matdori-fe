'use client';

import BorderNotification from '@/components/BorderNotification/BorderNotification';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import Input from '@/components/Input/Input';
import RoundButton from '@/components/RoundButton/RoundButton';
import SmallTitle from '@/components/Title/SmallTitle';
import { useRecoilState } from 'recoil';
import { RegisterEmailAtom } from '../status/RegisterEmailAtom';
import { useEffect, useState } from 'react';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import axios from 'axios';
import DepartmentModal from '@/components/Modal/DepartmentModal';
import ShopModal from '@/components/Modal/ShopModal';
import Button from '@/components/Button/Button';

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Registration({ searchParams }: Props) {
	const { modal } = searchParams;

	const [email, setEmail] = useRecoilState(RegisterEmailAtom);

	// 메일, 인증번호 유효성 검사를 위한 장치
	const [valid, setValid] = useState({
		email: 'form',
		verificationCode: false,
	});

	const [time, setTime] = useState(false);
	const [verificationCode, setVerificationCode] = useState('');

	// email의 값이 변경될 때마다 실행
	useEffect(() => {
		emailValidation();
	}, [email]);

	useEffect(() => {
		codeValidation();
	}, [verificationCode]);

	// 메일 유효성 검사
	const emailValidation = () => {
		setValid((prev) => ({ ...prev, email: 'form' }));

		if (email.endsWith('@inha.ac.kr') || email.endsWith('@inha.edu')) {
			setValid((prev) => ({ ...prev, email: 'valid' }));
		}
	};

	// TODO: 한박자씩 늦게 가는거 해결해야할듯
	// 인증번호 전송
	const postVerificationCode = async () => {
		const result = await axios.post(
			`${process.env.NEXT_PUBLIC_API}/email-authentication`,
			{
				email,
			}
		);

		console.log(result);
		if (result.status === 200) {
			setTime(true);
		}
	};

	const codeValidation = async () => {
		console.log(verificationCode);

		const result = await axios.post(
			`${process.env.NEXT_PUBLIC_API}/authentication-number`,
			{
				number: verificationCode,
				type: 'SIGNUP',
			}
		);
		console.log(result);
		if (result.status === 200) {
			setValid((prev) => ({ ...prev, verificationCode: true }));
		} else {
			setValid((prev) => ({ ...prev, verificationCode: false }));
		}
	};

	return (
		<div className='w-full'>
			<SmallTitle>학교 이메일</SmallTitle>
			<Input
				inputSize='small'
				value={email}
				onChange={(value: string) => setEmail(value)}
			/>
			{valid.email === 'valid' ? (
				<CheckNotification variant='valid' label='유효한 이메일입니다.' />
			) : (
				<CheckNotification
					variant='invalid'
					label='@inha.ac.kr 또는 @inha.edu 메일 형식을 사용해주세요.'
				/>
			)}
			<SmallTitle
				sideComponent={
					<RoundButton label='인증번호 발송' onClick={postVerificationCode} />
				}
			>
				인증번호
			</SmallTitle>
			<Input
				inputSize='small'
				value={verificationCode}
				onChange={(value: string) => setVerificationCode(value)}
				right={time && 'fiveMinTimer'}
				goTime
			/>
			{valid.verificationCode ? (
				<CheckNotification variant='valid' label='확인되었습니다.' />
			) : (
				<CheckNotification
					variant='invalid'
					label='올바른 인증번호를 사용해주세요.'
				/>
			)}
			<BorderNotification label='※ 입력한 이메일로 발송된 인증번호를 입력해주세요.' />
			<Button label='학교 이메일 인증하기' variant='active' />
			<DepartmentModal showModal={modal} href='/regist' />
		</div>
	);
}

/**
 * [x] : 이메일 다른 페이지에서 사용해야 하므로 어디에 저장해두기
 * [x] : 이메일 실시간 검증
 * [x] : 올바른 이메일임이 확인되면 파란 안내 메세지 아니라면 붉은 안내 메세지
 * [ ] : 클릭하면 타이머 시작하게. 지금은 한번 클릭하면 계속 시작 상태로 유지됨
 * [ ] : 메일 중복
 * [ ] : 파란 상태에서 이메일 인증 클릭하면 인증 메일 보내기
 * [ ] : 인증 번호 실시간으로 검증
 * [ ] : 올바른 인증번호면 파란 안내 메세지, 아니라면 붉은 안내 메세지
 * [ ] : 인증하기 버튼을 클릭하면 비밀번호 입력받는 페이지로 이동
 */
