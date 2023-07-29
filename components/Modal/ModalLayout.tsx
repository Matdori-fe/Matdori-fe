'use client';

import Background from '../Background/Background';
import Link from 'next/link';
import Text from '../Text/Text';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ModalLayoutProps {
	children: React.ReactNode;
	href?: string;
	title: string;
}
// Modal Layout
export default function ModalLayout({
	children,
	href = '',
	title,
}: ModalLayoutProps) {
	const router = useRouter();
	const [start, setStart] = useState<number>(0);
	const y = useMotionValue(0);
	const dragControls = useDragControls();

	const handleDragStart = () => {
		setStart(y.get());
		console.log('start=Y:', y.get());
	};

	const handleDragEnd = () => {
		const end = y.get();

		// 이동량이 많을 경우 이동
		if (end - start >= 100) {
			router.push('/', { scroll: false });
		}
	};

	// 아래로 스크롤이 많으면 내려간다.
	return (
		<Link href={href} scroll={false}>
			<div>
				<Background>
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
						onClick={(e) => e.preventDefault()}
						className='relative gap-[42px] md:w-[768px] w-full h-[400px] bg-white rounded-t-basic p-[20px] pt-[11px] flex flex-col items-center justify-start'
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						initial={{ y: 400 }}
						animate={{ y: 0 }}
						exit={{ y: 400 }}
					>
						<Link href={href} className='absolute right-6 top-6' scroll={false}>
							<RiCloseFill size='24' />
						</Link>
						<motion.div className='bg-lightGray w-[30px] h-[4px] rounded-basic' />
						<Text size='lg' fontWeight='bold'>
							{title}
						</Text>
						{children}
					</motion.div>
				</Background>
			</div>
		</Link>
	);
}
