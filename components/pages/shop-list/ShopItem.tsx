import Image from 'next/image';
import logo from '../../../assets/image/logo.svg';
import Text from '@/components/Text/Text';
import StarRate from '@/components/StarRate/StarRate';
import JokboInfo from '@/components/JokboInfo/JokboInfo';

export default function ShopItem({
	name,
	score,
	jokboCnt,
	img,
	category,
}: {
	name: string;
	score: number;
	jokboCnt: number;
	img: string;
	category: string;
}) {
	return (
		<div>
			<img
				src={img}
				className='w-full h-[100px] object-contain rounded-basic border border-solid border-lightGray'
			/>
			<div className='px-[5px] w-full pt-[6px]'>
				<div className='flex justify-between'>
					<Text
						size='sm'
						fontWeight='semibold'
						className='overflow-hidden whitespace-nowrap overflow-ellipsis'
					>
						{name}
					</Text>
					<JokboInfo kind='starScore' count={score} />
				</div>
				<div className='flex justify-between'>
					<Text size='xxs' color='darkGray'>
						{category}
					</Text>
					<JokboInfo kind='bookMark' count={jokboCnt} />
				</div>
			</div>
		</div>
	);
}

// TODO: 클릭하면 가게 페이지로 이동
