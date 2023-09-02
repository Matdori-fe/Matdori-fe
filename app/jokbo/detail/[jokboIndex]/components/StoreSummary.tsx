import ErrorImg from '@/components/ErrorImg/ErrorImg';
import ImageBox from '@/components/ImageBox/ImageBox';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import StatusBar from '@/components/StatusBar/StatusBar';
import Image from 'next/image';

type StoreSummaryInfo = {
	storeImgUrl: string;
	storeName: string;
	totalRating: number;
	flavorRating: number;
	underPricedRating: number;
	cleanRating: number;
};

const StoreSummary = ({
	storeImgUrl,
	storeName,
	totalRating,
	flavorRating,
	underPricedRating,
	cleanRating,
}: StoreSummaryInfo) => {
	return (
		<>
			<div className='px-[10px] w-full h-[80px] rounded-basic border-[1px] border-lightGray flex items-center min-w-[270px]'>
				<div>
					<Image
						alt='storeImg'
						src={storeImgUrl}
						width='58'
						height='58'
						className='min-w-[58px] min-h-[58px] bg-gray max-w-[58px] max-h-[58px] rounded-basic border-lightGray border'
						onError={ErrorImg}
					/>
				</div>
				<div className='flex justify-between w-full pl-[10px]'>
					<div className='flex flex-col flex-wrap justify-center h-auto w-fit gap-[4px]'>
						<div className='w-full text-[14px] font-SemiBold text-black text-center line-clamp-1'>
							{storeName}
						</div>
						<JokboInfo kind='starScore' count={totalRating} />
					</div>
					<div className='mb-1'>
						<StatusBar
							showScore
							cleanRating={cleanRating}
							flavorRating={flavorRating}
							underPricedRating={underPricedRating}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default StoreSummary;
