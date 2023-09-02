import { WriteImageProps } from '../../Write_Type/Write_Type';
import { RiCloseFill } from 'react-icons/ri';

const WriteImageBox: React.FC<WriteImageProps> = ({
	key,
	src,
	alt,
	onClick,
}) => {
	return (
		<div className='relative'>
			<div
				className='w-[20px] h-[20px] bg-lightGray rounded-full flex justify-center items-center absolute top-2 right-2 border border-lightGray'
				onClick={onClick}
			>
				<RiCloseFill className='w-[10px]' />
			</div>
			<img
				key={key}
				src={src}
				alt={alt}
				width={200}
				height={200}
				className='border border-lightGray w-[100px] h-[100px] min-w-[100px] min-h-[100px] rounded-[15px] object-cover'
			/>
		</div>
	);
};

export default WriteImageBox;
