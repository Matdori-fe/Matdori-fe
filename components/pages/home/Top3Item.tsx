import ImageBox from '@/components/ImageBox/ImageBox';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import StatusBar from '@/components/StatusBar/StatusBar';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import { RiStackFill, RiStarFill } from 'react-icons/ri';
import first from '../../../public/first.svg';
import second from '../../../public/second.svg';
import third from '../../../public/third.svg';
import { Top3Item } from '@/atoms/home/top3SortAtom';
import Link from 'next/link';

interface AddIdOnTop3Item extends Top3Item {
	id: number;
}

const image = [first, second, third];

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
					<div className='relative overflow-hidden border-[1px] border-lightGray rounded-[10px]'>
						<Text
							size='xs'
							color='white'
							className='absolute z-10 top-[4px] left-[5.5px]'
							fontWeight='bold'
						>
							{id + 1}
						</Text>
						<div className='w-[30px] h-[50px] bg-100 absolute rotate-45 top-[-18px] left-[-8px]' />
						<Image
							alt='shopImage'
							src={imgUrl}
							width={50}
							height={50}
							className='object-cover h-[50px] min-w-[50px] bg-white'
						/>
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
					<div className='flex items-center min-w-max'>
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
