'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BigTitle from '@/components/Title/BigTitle';
import ImageBox from '@/components/ImageBox/ImageBox';
import StoreSummary from './StoreSummary';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Header from '@/components/Header/Header';
import { formatDate } from '@/lib/formatDate';

interface JokboDetailProps {
	jokboIndex: number;
}

type DetailInfoType = {
	storeIndex: number;
	storeName: string;
	storeImgUrl: string;
	totalRating: number;
	flavorRating: number;
	underPricedRating: number;
	cleanRating: number;
	title: string;
	nickname: string;
	contents: string;
	jokboFavoriteId: number | null;
	createdAt: string;
	jokboImgUrlList: string[];
};

const JokboDetailComponent: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
	const [detailInfo, setDetailInfo] = useState<DetailInfoType>({
		storeIndex: 0,
		storeName: '',
		storeImgUrl: '',
		totalRating: 0,
		flavorRating: 0,
		underPricedRating: 0,
		cleanRating: 0,
		title: '',
		nickname: '',
		contents: '',
		jokboFavoriteId: null,
		createdAt: '',
		jokboImgUrlList: [],
	});
	const user = useRecoilValue(UserAtom);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}`,
					{
						headers: { userIndex: user.userId },
						withCredentials: true,
					}
				);
				setDetailInfo(response.data.result);
				console.log('족보 정보', response.data.result);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<Header
				left='back'
				right={['share', 'like', 'more']}
				kind='jokbo'
				id={jokboIndex}
				inFavoriteId={detailInfo.jokboFavoriteId}
				jokboShareInfo={{
					nickName: detailInfo.nickname,
					storeName: detailInfo.storeName,
					imageUrl: detailInfo.jokboImgUrlList,
					jokboIndex: jokboIndex,
					jokboTitle: detailInfo.title,
				}}
			/>

			<BigTitle>{detailInfo?.title}</BigTitle>
			<div className='text-[10px] font-Regular text-gray mt-[6px]'>
				{formatDate(detailInfo?.createdAt)} <span className='mr-[6px]' />|
				<span className='mr-[6px]' /> {detailInfo?.nickname}
			</div>

			<div className='w-full text-[12px] font-Regular text-darkGray mt-4'>
				{detailInfo?.contents}
			</div>
			<div className='flex w-full mt-4 mb-6 overflow-x-scroll flex-nowrap scrollbar-hide gap-[10px]'>
				{detailInfo?.jokboImgUrlList.map((element, i) => (
					<ImageBox
						key={i}
						className='w-[70px] h-[70px] min-w-[70px] min-h-[70px]'
						url={element}
					/>
				))}
			</div>
			<StoreSummary
				storeImgUrl={detailInfo.storeImgUrl}
				storeName={detailInfo.storeName}
				totalRating={detailInfo.totalRating}
				flavorRating={detailInfo.flavorRating}
				underPricedRating={detailInfo.underPricedRating}
				cleanRating={detailInfo.cleanRating}
			/>
		</>
	);
};

export default JokboDetailComponent;
