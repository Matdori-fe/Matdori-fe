import ImageBox from '@/components/ImageBox/ImageBox';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import StatusBar from '@/components/StatusBar/StatusBar';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import { RiStackFill, RiStarFill } from 'react-icons/ri';
import { Top3Item } from '@/atoms/home/top3SortAtom';
import Link from 'next/link';
import ErrorImg from '@/components/ErrorImg/ErrorImg';

interface AddIdOnTop3Item extends Top3Item {
	id: number;
}

export default function Top3Item({
	imgUrl,
	storeIndex,
	name,
	cleanRating,
	underPricedRating,
	totalRating,
	flavorRating,
	id,
}: AddIdOnTop3Item) {
	return (
		<Link href={`/store/${storeIndex}/?tab=shop&section=menu`}>
			<div
				className={`justify-between h-[70px] w-full flex items-center ${
					id !== 0 && 'border-t-[1px] border-lightGray'
				}`}
			>
				<div className='flex items-center gap-[16px] min-w-0'>
					<div className='flex flex-shrink-0 min-w-[50px] min-h-[50px] relative overflow-hidden border-[1px] border-lightGray rounded-[10px]'>
						<Text
							size='xs'
							color='white'
							className='absolute z-10 top-[4px] left-[5.5px]'
							fontWeight='bold'
						>
							{id + 1}
						</Text>
						<div className='w-[30px] h-[50px] bg-100 absolute rotate-45 top-[-18px] left-[-8px]' />
						<div>
							<Image
								alt='storeImg'
								src={imgUrl}
								width='50'
								height='50'
								className='bg-gray max-w-[50px] max-h-[50px]  min-w-[50px] min-h-[50px]'
								onError={ErrorImg}
							/>
						</div>
					</div>
					<Text
						size='base'
						fontWeight='bold'
						className='overflow-hidden whitespace-nowrap overflow-ellipsis'
					>
						{name}
					</Text>
				</div>
				<div className='flex items-center gap-[16px]'>
					<div className='flex items-center min-w-max w-[43px]'>
						<RiStarFill className='fill-yellow gap-[2px] mr-[4px]' size={14} />
						<Text size='base' fontWeight='medium' color='darkGray'>
							{totalRating.toFixed(1)}
						</Text>
					</div>
					<StatusBar
						cleanRating={cleanRating}
						flavorRating={flavorRating}
						underPricedRating={underPricedRating}
						showScore={false}
					/>
				</div>
			</div>
		</Link>
	);
}
