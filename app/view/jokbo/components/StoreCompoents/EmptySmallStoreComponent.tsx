import Text from '@/components/Text/Text';
import Image from 'next/image';
const EmptySmallStoreComponent = () => {
	return (
		<>
			<div className='w-[100px] min-w-[100px] flex flex-wrap justify-center'>
				<div className='w-[100px] h-[100px] bg-lightGray rounded-basic'>
					<Image
						src={'/logout_ppok.png'}
						alt='Empty_pook'
						width={300}
						height={200}
					/>
				</div>
				<Text
					size='sm'
					color='black'
					fontWeight='semibold'
					className='line-clamp-1'
				>
					준비중이에요
				</Text>
			</div>
		</>
	);
};

export default EmptySmallStoreComponent;
