'use client';
import { StoreIndex } from '../Write_Type/Write_Type';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import { StoreInfoHeader } from '../Write_Type/Write_Type';
import ImageBox from '@/components/ImageBox/ImageBox';
import Text from '@/components/Text/Text';
import axios from 'axios';

const ChoiceStore = ({ storeIndex }: StoreIndex) => {
	const userInfo = useRecoilValue(UserAtom);

	const [storeData, setStoreData] = useState<StoreInfoHeader>({
		name: 'none',
		totalRating: 0,
		flavorRating: 0,
		underPricedRating: 0,
		cleanRating: 0,
		imgUrl: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					`${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header?userIndex=${userInfo.userId}`,
					{
						withCredentials: true,
					}
				);
				console.log(result);
				setStoreData(result.data.result.storeInformationHeader);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [storeIndex]);

	return (
		<div className='w-full h-[80px] border-[1px] border-lightGray rounded-basic mt-[15px] flex px-[10px] items-center'>
			<ImageBox size='small' url={storeData.imgUrl} />
			<div className='flex flex-wrap ml-3'>
				<Text
					fontWeight='semibold'
					size='sm'
					color='black'
					className='line-clamp-2'
				>
					{storeData.name}
				</Text>
				<div className='w-full h-1'></div>
				<Text
					fontWeight='normal'
					size='xs'
					color='darkGray'
					className='line-clamp-2'
				>
					{storeData.name}
				</Text>
			</div>
		</div>
	);
};

export default ChoiceStore;
