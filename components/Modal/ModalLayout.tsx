'use client';

import Background from '../Background/Background';
import Link from 'next/link';
import Text from '../Text/Text';
import {
	AnimatePresence,
	motion,
	useDragControls,
	useMotionValue,
} from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import { use, useEffect, useState } from 'react';
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

	// // 뒤 스크롤 방지
	useEffect(() => {
		const { body } = document;

		if (!body.getAttribute('scrollY')) {
			const pageY = window.pageYOffset;

			body.setAttribute('scrollY', pageY.toString());

			body.style.overflow = 'hidden';
			body.style.position = 'fixed';
			body.style.left = '0px';
			body.style.right = '0px';
			body.style.bottom = '0px';
			body.style.top = `-${pageY}px`;
		}

		return () => {
			if (body.getAttribute('scrollY')) {
				body.style.removeProperty('overflow');
				body.style.removeProperty('position');
				body.style.removeProperty('top');
				body.style.removeProperty('left');
				body.style.removeProperty('right');
				body.style.removeProperty('bottom');

				window.scrollTo(0, Number(body.getAttribute('scrollY')));

				body.removeAttribute('scrollY');
			}
		};
	}, []);

	useEffect(() => {
		console.log('ji');

		return () => console.log('bi');
	}, []);

	// 이동량이 많을 경우 이동
	const handleDragEnd = () => {
		const end = y.get();

		if (end - start >= 100) {
			onClose();
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
				className={`relative w-full bg-white rounded-t-basic pt-[11px] flex flex-col items-center justify-start w-full`}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				initial={variant === 'large' ? { y: 800 } : { y: 400 }}
				animate={
					variant === 'large'
						? { y: 0, height: '514px' }
						: { y: 0, height: '400px' }
				}
				exit={variant === 'large' ? { y: 514 } : { y: 400 }}
				// FIXME: 다시 추천받기를 누르면 모션이 이상함
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
					<AnimatePresence>{children}</AnimatePresence>
				</motion.div>
			</motion.div>
		</Background>
	);
}
