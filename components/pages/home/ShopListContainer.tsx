import ShopItem from './ShopItem';

export default function ShopListContainer({ list }) {
	return (
		<div>
			<div className='flex flex-col gap-[15px]'>
				{list.map((_, i) => (
					<ShopItem key={i} />
				))}
			</div>
			<div className='mb-[80px]'></div>
		</div>
	);
}
