import BigTitle from '@/components/Title/BigTitle';
import ShopItem from './ShopItem';
import ShopListContainer from './ShopListContainer';

export default function InfiniteShopListSection() {
	const a = [1, 2, 3, 4, 5];
	return (
		<>
			<BigTitle className='mb-[15px]'>골라먹는 맛집</BigTitle>
			<ShopListContainer list={a} />
		</>
	);
}
