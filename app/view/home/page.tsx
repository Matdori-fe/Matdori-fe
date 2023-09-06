'use client';

import HorizonBar from '@/components/HorizonBar/HorizonBar';
import ModalContainer, {
	modals,
} from '@/components/ModalContainer/ModalContainer';
import DepartmentModalOpener from '@/components/ModalOpener/DepartmentModalOpener';
import CarouselSection from '@/components/pages/home/CarouselSection';
import CategorySection from '@/components/pages/home/CategorySection';
import InfiniteShopListSection from '@/components/pages/home/InfiniteShopListSection';
import RecommendButtonsSection from '@/components/pages/home/RecommendButtonsSection';
import Top3Section from '@/components/pages/home/Top3Section';
import { useModal } from '@/hooks/useModal';
import axios from 'axios';

export default function Home() {
	// 1. 모달을 열기위한 훅을 호출한다.
	const { openModal } = useModal();

	return (
		<div className='flex flex-col gap-[30px]'>
			<CarouselSection />

			<RecommendButtonsSection />

			{/* 2. 호출한 훅에 id와 모달 컴포넌트를 담는다. 모달 컴포넌트는 modals를 import해와서 원하는 모달을 .연산자로 선택  */}
			<button onClick={() => openModal({ id: 'more', Component: modals.more })}>
				modal
			</button>

			<CategorySection />
			<Top3Section />
			<div className='mb-[100px]' />
			{/* <InfiniteShopListSection /> */}
		</div>
	);
}

// const getServiceRule = async () => {
// 	const result = await fetch(
// 		`${process.env.NEXT_PUBLIC_API}/terms-of-service`,
// 		{ cache: 'no-store' }
// 	);

// 	const data = await result.json();
// 	return data.result;
// };
