'use client';

import Background from '../Background/Background';
import Link from 'next/link';
import Text from '../Text/Text';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ModalLayoutProps {
	children: React.ReactNode;
	href?: string;
	title: string;
	variant?: 'normal' | 'large';
}
// Modal Layout
export default function ModalLayout({
	children,
	href = '',
	title,
	variant = 'normal',
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
		document.body.classList.add('overflow-y-hidden');
		return () => document.body.classList.remove('overflow-y-hidden');
	});

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
		<Background onClick={() => router.push(href, { scroll: false })}>
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
				onClick={(e) => e.stopPropagation()}
				className={`relative w-full ${
					variant === 'large' ? 'h-[514px]' : 'h-[400px]'
				} bg-white rounded-t-basic pt-[11px] flex flex-col items-center justify-start`}
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
					onClick={() => router.push(href, { scroll: false })}
				/>
				<motion.div className='bg-lightGray w-[30px] h-[4px] rounded-basic' />
				<div className='mb-[42px]' />
				<Text size='lg' fontWeight='bold'>
					{title}
				</Text>
				<div className={variant === 'large' ? 'mb-[20px]' : 'mb-[30px]'} />
				<div className='flex flex-col sm:w-[412px] w-full px-[20px]'>
					{children}
				</div>
			</motion.div>
		</Background>
	);
}
