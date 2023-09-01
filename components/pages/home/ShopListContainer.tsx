import ShopItem from './ShopItem';

export default function ShopListContainer({ list }: { list: any }) {
	return (
		<div>
			<div className='flex flex-col gap-[15px]'>
				{list.map((_: any, i: number) => (
					<ShopItem key={i} />
				))}
			</div>
			<div className='mb-[80px]'></div>
		</div>
	);
}
