import { RiCheckFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

// FIXME: 애니메이션 추가. 쓰던거는 새로운 페이지 패치시 모든 pages가 리렌더되어 애니메이션도 다시 시작하게 됨
export default function Checked() {
	return (
		<div className='absolute w-full flex items-center justify-center h-[calc(100%-2px)] bg-white/80 '>
			{/* <motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.1, type: 'spring', stiffness: 150 }}
				className='relative w-[30px] h-[30px] bg-10 rounded-basic flex justify-center items-center'
			>
				<RiCheckFill className='fill-100' size='22' />
			</motion.div> */}
			<div className='relative w-[30px] h-[30px] bg-10 rounded-basic flex justify-center items-center'>
				<RiCheckFill className='fill-100' size='22' />
			</div>
		</div>
	);
}
