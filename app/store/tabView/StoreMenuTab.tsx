'use client';
import SelectTab from '@/components/SelectTab/SelectTab';
import { useState, useEffect } from 'react';
import MenuBlock from './components/MenuBlock';
import axios from 'axios';
import Link from 'next/link';
import { RiEdit2Fill } from 'react-icons/ri';
import Toast from '@/components/Toast/Toast';
type StoreIndexIn = {
	storeIndex: number;
};

const StoreMenuTab = ({ storeIndex }: StoreIndexIn) => {
	// 스크롤 감지 부분
	const [isFixed, setIsFixed] = useState(false);
	function handleScroll() {
		const scrollTop = window.pageYOffset;
		requestAnimationFrame(() => {
			setIsFixed(scrollTop > 165);
		});
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	//메뉴 값 받기
	const [menuList, setMenuList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/menu`
				);
				setMenuList(response.data.result);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [storeIndex]);

	return (
		<>
			<div className='mb-[150px] h-auto flex flex-wrap justify-center select-tab'>
				<div
					className={`${
						isFixed
							? 'w-full max-w-[412px] fixed left-6/12 top-[50px]'
							: 'w-full'
					} z-30 bg-white`}
				>
					<SelectTab />
				</div>

				<div
					className={`w-full mx-4 flex flex-wrap justify-center ${
						isFixed ? 'mt-[49px]' : ''
					}`}
				>
					{menuList.map(({ name, menus }, idx) => {
						if (idx === 0) {
							return (
								<MenuBlock
									name={name}
									menus={menus}
									firstShow={true}
									key={idx}
								/>
							);
						}
						return (
							<MenuBlock
								name={name}
								menus={menus}
								firstShow={false}
								key={idx}
							/>
						);
					})}
				</div>
				<div className='w-full mx-4 mt-6'>
					<div className='justify-center py-3 bg-white border rounded-2xl border-lightGray'>
						<div className='font-Regular text-[12px] text-darkGray text-center'>
							※ 메뉴 항목과 가격은 상단에 기재된 내용과 다를 수 있습니다.
						</div>

						<div
							className='font-Bold text-[12px] text-80 flex text-center justify-center'
							onClick={() => {
								Toast('정보 수정을 요청하였습니다.');
							}}
						>
							<RiEdit2Fill className='w-[12px] text-80 mt-1 mr-1' />
							정보 수정 요청하기
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StoreMenuTab;
