'use client';

import Background from '../Background/Background';
import Link from 'next/link';
import Text from '../Text/Text';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/useModal';

interface ModalLayoutProps {
	children: React.ReactNode;
	title: string;
	variant?: 'normal' | 'large';
	onClose: () => void;
}
// Modal Layout
export default function ModalLayout({
	children,
	title,
	variant = 'normal',
	onClose,
}: ModalLayoutProps) {
	const router = useRouter();
	const [start, setStart] = useState<number>(0);

	// 드래그 위치 기록을 위한 함수들
	const y = useMotionValue(0);
	const dragControls = useDragControls();

	// 드래그 시작 위치 기록
	const handleDragStart = () => setStart(y.get());

	// 뒤 스크롤 방지
	useEffect(() => {
		// const scrollPosition = window.pageYOffset;

		document.body.classList.add('overflow-y-hidden');
		document.body.style.overflow = 'hidden';
		// document.body.style.pointerEvents = 'none';
		// document.body.style.position = 'fixed';
		// document.body.style.top = `-${scrollPosition}px`;
		// document.body.style.left = '0';
		// document.body.style.right = '0';
		return () => {
			document.body.classList.remove('overflow-y-hidden');
			// document.body.style.removeProperty('overflow');
			// document.body.style.removeProperty('pointer-events');
			// document.body.style.removeProperty('position');
			// document.body.style.removeProperty('top');
			// document.body.style.removeProperty('left');
			// document.body.style.removeProperty('right');
		};
	}, []);

	// 이동량이 많을 경우 이동
	const handleDragEnd = () => {
		const end = y.get();

		if (end - start >= 100) {
			router.push('/', { scroll: false });
		}
	};

	// FIXME: refactoring
	// 아래로 스크롤이 많으면 내려간다.
	return (
		<Background onClose={onClose}>
			<motion.div
				dragControls={dragControls}
				dragSnapToOrigin
				drag='y'
				style={{ y }}
				dragElastic={{ top: 0, bottom: 1 }}
				dragConstraints={{
					bottom: 400,
					top: 0,
				}}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				dragMomentum={false}
				// 자식으로 전파 방지
				className={`relative w-full ${
					variant === 'large' ? 'h-[514px]' : 'h-[400px]'
				} bg-white rounded-t-basic pt-[11px] flex flex-col items-center justify-start w-full`}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				initial={{ y: 400 }}
				animate={{ y: 0 }}
				exit={{ y: 400 }}
				// FIXME: 다시 추천받기를 누르면 모션이 이상함
				layout
			>
				<RiCloseFill
					className='absolute right-6 top-6'
					size='24'
					onClick={onClose}
				/>
				<motion.div className='absolute bg-lightGray w-[30px] h-[4px] rounded-basic' />
				<div className='mb-[42px]' />
				<Text size='lg' fontWeight='bold'>
					{title}
				</Text>
				<div className={variant === 'large' ? 'mb-[20px]' : 'mb-[30px]'} />
				<motion.div
					// NOTE: 드래그 이벤트 버블링 멈추기
					onDragStart={(e) => e.stopPropagation()}
					onClick={(e) => e.stopPropagation()}
					className='flex flex-col sm:w-[412px] w-full px-[20px] h-full'
				>
					{children}
				</motion.div>
			</motion.div>
		</Background>
	);
}
