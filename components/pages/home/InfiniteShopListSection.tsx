import BigTitle from '@/components/Title/BigTitle';
import ShopItem from './ShopItem';
import ShopListContainer from './ShopListContainer';
import HorizonBar from '@/components/HorizonBar/HorizonBar';

export default function InfiniteShopListSection() {
	const a = [1, 2, 3, 4, 5];
	return (
		<div className='flex flex-col gap-[16px]'>
			<div className='bg-lightGray h-[7px] w-[100vw] relative left-[-20px]' />
			<BigTitle>골라먹는 맛집</BigTitle>
			<ShopListContainer list={a} />
		</div>
	);
}
