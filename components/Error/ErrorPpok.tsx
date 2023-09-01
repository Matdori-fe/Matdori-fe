import Image from 'next/image';
import errorPpok from '../../public/error_ppok.png';
import Text from '../Text/Text';

interface IErrorPpok {
	errorMessage?: 'serverError' | 'unknownError';
	variant?: 'small' | 'normal';
}

const errorMessageVariant = {
	serverError: '서버 에러가 발생했습니다.',
	unknownError: '알 수 없는 오류가 발생했습니다.',
};

export default function ErrorPpok({
	errorMessage = 'unknownError',
	variant = 'normal',
}: IErrorPpok) {
	return (
		<div
			className={`flex-col w-full flex justify-center items-center gap-[16px] ${
				variant === 'small' ? 'h-[200px]' : 'h-[400px]'
			}`}
		>
			<Image src={errorPpok} width='100' height='100' alt='errorPpok' />
			<Text size='sm' color='darkGray'>
				{errorMessageVariant[errorMessage]}
			</Text>
		</div>
	);
}
