// props=> type: redStoreRecommend | whiteStoreRecommend | redMenuRecommend | whiteMenuRecommend
// myLike | myActivity
'use client';

import Image from 'next/image';
import foodBarImg from '../../public/foodBarImg.svg';
import heartWoman from '../../public/heartWoman.svg';
import recommendimg from '../../public/recommendimg.svg';
import smartPhone from '../../public/smartPhone.svg';
import { useModal } from '@/hooks/useModal';
import { modals } from '../ModalContainer/ModalContainer';
import DepartmentModalOpener from '../ModalOpener/DepartmentModalOpener';
import { useRouter } from 'next/navigation';

type ButtonType =
	| 'redStoreRecommend'
	| 'whiteStoreRecommend'
	| 'redMenuRecommend'
	| 'whiteMenuRecommend'
	| 'myLike'
	| 'myActivity';

const SmallButtonBar: React.FC<{ type: ButtonType }> = (props) => {
	const { type } = props;
	const { openModal } = useModal();
	const router = useRouter();

	if (type === 'redStoreRecommend') {
		return (
			<>
				{/*가게 추천받기 red버전*/}
				<div
					onClick={() => openModal('shop', modals.shop)}
					className='w-full h-[40px] bg-100 rounded-[15px] flex items-center'
				>
					<Image src={recommendimg} />
					<p className='font-Bold text-[14px] text-white relative right-1.5'>
						가게 추천받기
					</p>
				</div>
			</>
		);
	}

	if (type === 'whiteStoreRecommend') {
		return (
			<>
				{/*가게 추천받기 white버전*/}
				<div
					onClick={() => openModal('shop', modals.shop)}
					className='w-full h-[40px] bg-white rounded-[15px] flex items-center border-lightGray border-[1px]'
				>
					<Image src={recommendimg} />
					<p className='font-Regular text-[12px] text-darkGray mt-[2px]'>
						가게 추천받기
					</p>
				</div>
			</>
		);
	}
	if (type === 'redMenuRecommend') {
		return (
			<>
				{/* 메뉴 추천받기 red버전*/}
				<div
					onClick={() => openModal('menu', modals.menu)}
					className='w-full h-[40px] bg-100 rounded-[15px] flex items-center justify-between overflow-hidden'
				>
					<p className='font-Bold text-[14px] text-white ml-4'>메뉴 추천받기</p>
					<Image src={foodBarImg} />
				</div>
			</>
		);
	}
	if (type === 'whiteMenuRecommend') {
		return (
			<>
				{/*메뉴 추천받기 white버전*/}
				<div
					onClick={() => openModal('menu', modals.menu)}
					className='w-full h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] overflow-hidden'
				>
					<p className='font-Regular text-[12px] text-darkGray ml-5 mt-[2px]'>
						메뉴 추천받기
					</p>
					<Image src={foodBarImg} />
				</div>
			</>
		);
	}
	if (type === 'myLike') {
		return (
			<>
				{/*내 좋아요 컴포넌트*/}
				<div
					onClick={() =>
						router.push('/my-likes/?tab=likes&section=favoriteshop')
					}
					className='w-full h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] px-5'
				>
					<Image src={heartWoman} className='h-[36px] mt-1.4' />
					<p className='font-Regular text-[12px] text-darkGray mt-[2px]'>
						내 좋아요
					</p>
				</div>
			</>
		);
	}
	if (type === 'myActivity') {
		return (
			<>
				{/*내 활동 컴포넌트*/}
				<div
					onClick={() =>
						router.push('/my-activity/?tab=activity&section=myjokbo')
					}
					className='w-full h-[40px] bg-white rounded-[15px] flex items-center justify-between border-lightGray border-[1px] px-5'
				>
					<p className='font-Regular text-[12px] text-darkGray mt-[2px]'>
						내 활동
					</p>
					<Image src={smartPhone} className='h-[36px] mt-1.4' />
				</div>
			</>
		);
	}

	return <>잘못된 type 입력</>;
};

export default SmallButtonBar;
