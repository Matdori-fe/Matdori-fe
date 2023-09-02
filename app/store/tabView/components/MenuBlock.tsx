import MenuComponent from './MenuComponent';
import Text from '@/components/Text/Text';
import { useState } from 'react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
// name, 메뉴 배열 주면 그걸 보여줌.
type MenuBlockType = {
	name: string;
	menus: MenuType[];
	firstShow: boolean;
};

type MenuType = { name: string; price: string; imgUrl: string };

const MenuBlock = ({ name, menus, firstShow }: MenuBlockType) => {
	const [isShow, setIsShow] = useState<boolean>(firstShow);

	return (
		<>
			{isShow ? (
				<>
					<div className='flex justify-between w-full my-3'>
						<Text fontWeight='semibold' size='sm' color='black'>
							{name}
						</Text>
						<RiArrowDownLine
							className='w-[14px]'
							onClick={() => {
								setIsShow(false);
							}}
						/>
					</div>
					<HorizonBar className='mb-2' />
					<div className='flex flex-wrap justify-center w-full'>
						{menus.map(({ name, price, imgUrl }) => {
							return (
								<MenuComponent
									name={name}
									price={price}
									imgUrl={imgUrl}
									key={name}
								/>
							);
						})}
					</div>
				</>
			) : (
				<>
					{' '}
					<div className='flex justify-between w-full my-3'>
						<Text fontWeight='semibold' size='sm' color='black'>
							{name}
						</Text>
						<RiArrowUpLine
							className='w-[14px]'
							onClick={() => {
								setIsShow(true);
							}}
						/>
					</div>
					<HorizonBar className='mb-2' />
				</>
			)}
		</>
	);
};

export default MenuBlock;
