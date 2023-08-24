import Image from 'next/image';
import logoutPpok from '../../public/logout_ppok.png';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';

export default function Logout() {
	return (
		<div className='w-full h-[500px] flex justify-center items-center flex-col'>
			<Image src={logoutPpok} alt='logout_ppok' width={125} height={125} />
			<div className='w-full mb-[20px]' />
			<Text fontWeight='semibold' size='sm'>
				로그아웃 되었습니다.
			</Text>
			<Text size='xs' color='darkGray'>
				맛도리를 이용해주셔서 감사합니다.
			</Text>
			<Button variant='active' href='/login' label='로그인하러 가기' />
		</div>
	);
}
