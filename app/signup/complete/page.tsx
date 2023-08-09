import BorderNotification from '@/components/BorderNotification/BorderNotification';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import Input from '@/components/Input/Input';
import RoundButton from '@/components/RoundButton/RoundButton';
import SmallTitle from '@/components/Title/SmallTitle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RegisterEmailAtom } from '../../status/RegisterEmailAtom';
import { useCallback, useEffect, useState } from 'react';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import axios from 'axios';
import DepartmentModal from '@/components/Modal/DepartmentModal';
import ShopModal from '@/components/Modal/ShopModal';
import Button from '@/components/Button/Button';
import { IsGoTimer, TimerAtom } from '../../status/TimerAtom';
import { Validation, validationNotification } from './validation';
import Background from '@/components/Background/Background';
import Header from '@/components/Header/Header';
import Text from '@/components/Text/Text';
import AWS from 'aws-sdk';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default async function Registration() {
	// const [imageURL, setImageURL] = useState('');
	// const router = useRouter();

	// const image = (await getCompleteImage()).props.imageUrl;

	const img = getImg();

	return (
		<>
			<div className='flex flex-col items-center w-full gap-[15px] justify-center pt-[10vh]'>
				<Image src={img} width='350' height='350' alt='signup-complete' />
				<Text color='100' size='sm' fontWeight='semibold'>
					가입이 완료되었어요!
				</Text>
				<Text size='xs' color='darkGray'>
					이제 맛도리와 함께 맛집 참방을 시작해볼까요?
				</Text>
			</div>
			<Button variant='active' label='로그인하러 가기' href='/login' />
		</>
	);
}

// s3 이미지 불러오기
// export async function getCompleteImage() {
// 	// const key = process.env.NEXT_PUBLIC_S3_KEY;
// 	// const kkey = process.env.NEXT_PUBLIC_S3_SECRET_KEY;
// 	let imageUrl;

// 	// 	NEXT_PUBLIC_S3_KEY = AKIAWXAL327ZJJGSCO46
// 	// NEXT_PUBLIC_S3_SECRET_KEY = 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

// 	// AWS 설정
// 	AWS.config.update({
// 		accessKeyId: 'AKIAWXAL327ZJJGSCO46',
// 		secretAccessKey: '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',
// 		region: 'ap-northeast-2', // 예: 'us-east-1'
// 	});

// 	// S3 버킷 이름과 이미지 파일 경로 설정
// 	const bucketName = 'matdori';
// 	const imagePath = 'signup-complete.svg'; // 이미지 파일 경로

// 	// S3 객체 생성
// 	const s3 = new AWS.S3();

// 	// S3에서 이미지 URL 가져오기
// 	try {
// 		const url = await new Promise((resolve, reject) => {
// 			s3.getSignedUrl(
// 				'getObject',
// 				{
// 					Bucket: bucketName,
// 					Key: imagePath,
// 					Expires: 60 * 60, // URL 만료 시간 (예: 1시간)
// 				},
// 				(error, url) => {
// 					if (error) {
// 						console.error('Error fetching the image from S3:', error);
// 						reject(error);
// 					} else {
// 						console.log('hi');
// 						resolve(url);
// 					}
// 				}
// 			);
// 		});

// 		imageUrl = url;
// 	} catch (error) {
// 		console.error('Error fetching the image:', error);
// 	}

// 	console.log(imageUrl);
// 	return {
// 		props: {
// 			imageUrl,
// 		},
// 	};
// }

const getImg = () => {
	return 'https://matdori.s3.ap-northeast-2.amazonaws.com/signup-complete.svg';
};
