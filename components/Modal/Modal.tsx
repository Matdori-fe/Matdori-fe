'use client';

import { recommendShopModalState } from '@/app/status/modalAtom';
import { useRecoilState } from 'recoil';
import Background from '../Background/Background';
import { useModal } from '@/hooks/useModal';
import Link from 'next/link';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { AnimatePresence, motion } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
// export default function Modal() {
// 	const [recommendShopModalIsOpen, setRecommendShopModalIsOpen] =
// 		useRecoilState<boolean>(recommendShopModalState);
// 	const handleModalClose = () => setRecommendShopModalIsOpen(false);

// 	return (
// 		<>
// 			{recommendShopModalIsOpen && (
// 				<div>
// 					<Background fuc={handleModalClose}>
// 						<div className='md:w-[768px] w-full h-[400px] bg-white rounded-t-basic'></div>
// 					</Background>
// 				</div>
// 			)}
// 		</>
// 	);
// }

// Modal Layout
export default function ModalLayout({ children }) {
	return (
		<AnimatePresence>
			{showModal && (
				<Link href='/'>
					<div>
						<Background>
							<motion.div
								onClick={(e) => e.preventDefault()}
								className='relative gap-[42px] md:w-[768px] w-full h-[400px] bg-white rounded-t-basic p-[20px] pt-[11px] flex flex-col items-center justify-start'
								transition={{ duration: 0.5, ease: 'easeInOut' }}
								initial={{ y: 400 }}
								animate={{ y: 0 }}
								exit={{ y: 400 }}
							>
								<Link href='/' className='absolute right-6 top-6'>
									<RiCloseFill size='24' />
								</Link>
								<div className='bg-lightGray w-[30px] h-[4px] rounded-basic' />
								<Text size='lg' fontWeight='bold'>
									맛도리가 추천하는 가게
								</Text>
							</motion.div>
						</Background>
						{/* <Button variant='active' label='다시 추천 받기' href='/' /> */}
					</div>
				</Link>
			)}
		</AnimatePresence>
	);
}
