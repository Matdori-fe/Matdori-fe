'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Text from '../Text/Text';
import logoutPpok from '../../public/logout_ppok.png';
import Button from '../Button/Button';

export default function SessionCheck({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('recoil-persist') === null) {
			setIsLogin(false);
		}
	}, []);

	const pathname = window.location.pathname;

	if (pathname === '/login/' || pathname === '/signup/') return <>{children}</>;
	// if (!isLogin)
	// 	return (
	// 		<div className='w-full h-[500px] flex justify-center items-center flex-col'>
	// 			<Image src={logoutPpok} alt='logout_ppok' width={125} height={125} />
	// 			<div className='w-full mb-[20px]' />
	// 			<Text fontWeight='semibold' size='sm'>
	// 				로그인 세션이 만료되었습니다.
	// 			</Text>
	// 			<Text size='xs' color='darkGray'>
	// 				다시 로그인을 시도해주세요.
	// 			</Text>
	// 			<Button variant='active' href='/login' label='로그인하러 가기' />
	// 		</div>
	// 	);
	else return <>{children}</>;
}
