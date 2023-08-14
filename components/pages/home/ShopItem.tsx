import Image from 'next/image';
import test from '../../../public/test.svg';
import Text from '@/components/Text/Text';
import JokboInfo from '@/components/JokboInfo/JokboInfo';
import StarRate from '@/components/StarRate/StarRate';
import BestJokbo from '@/components/BestJokbo/BestJokbo';

export default function ShopItem() {
	return (
		<>
			<div className='w-full h-[116px] border border-lightGray rounded-basic flex flex-col'>
				<div className='flex justify-between'>
					<span className='w-[43%] [&>img]:object-fit h-[75px] overflow-hidden relative'>
						<Image
							src={test}
							alt='test'
							className='rounded-tl-basic'
							layout='fill'
							objectFit='cover'
							objectPosition='center'
						/>
					</span>
					<div className='grow px-[14px] pt-[8px]'>
						<div className='flex items-center justify-between w-full grow'>
							<Text size='lg' fontWeight='bold'>
								가메이
							</Text>
							<JokboInfo
								kind='bookMark'
								count={24}
								className='text-[12px]'
								size='large'
							/>
						</div>
						<div className='flex'>
							<StarRate score={3.3} />
							<Text size='base' color='gray'>
								3.3
							</Text>
						</div>
					</div>
				</div>
				<BestJokbo
					content={
						'dㅁ아ㅣ러미ㅏ어리ㅏ멍니ㅏ러미ㅏㄴ어리ㅏㅁㄴ어리asdsadsdaaaaaaaㅏ너리ㅏㅁ어리ㅏ너dㅁ아ㅣ러미ㅏ어리ㅏ멍니ㅏ러미ㅏㄴ어리ㅏㅁㄴ어리asdsadsdaaaaaaaㅏ너리ㅏㅁ어리ㅏ너dㅁ아ㅣ러미ㅏ어리ㅏ멍니ㅏ러미ㅏㄴ어리ㅏㅁㄴ어리asdsadsdaaaaaaaㅏ너리ㅏㅁ어리ㅏ너dㅁ아ㅣ러미ㅏ어리ㅏ멍니ㅏ러미ㅏㄴ어리ㅏㅁㄴ어리asdsadsdaaaaaaaㅏ너리ㅏㅁ어리ㅏ너'
					}
				/>
			</div>
		</>
	);
}
