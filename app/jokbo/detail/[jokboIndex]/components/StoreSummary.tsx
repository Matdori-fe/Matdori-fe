import ImageBox from '@/components/ImageBox/ImageBox';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import StatusBar from '@/components/StatusBar/StatusBar';

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
			<div className='w-full h-[80px] rounded-basic border-[1px] border-lightGray flex items-center min-w-[270px] px-2'>
				<ImageBox size='small' url={storeImgUrl} />
				<div className='flex justify-between w-full mx-2'>
					<div className='flex flex-wrap justify-center h-auto w-fit'>
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
