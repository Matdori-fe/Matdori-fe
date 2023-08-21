import Image from 'next/image';
import errorPpok from '../../public/error_ppok.png';
import Text from '../Text/Text';

interface IErrorPpok {
	errorMessage: 'serverError' | 'unknownError';
}

const errorMessageVariant = {
	serverError: '서버 에러가 발생했습니다.',
	unknownError: '알 수 없는 오류가 발생했습니다.',
};

export default function ErrorPpok({
	errorMessage = 'unknownError',
}: IErrorPpok) {
	return (
		<div className='flex-col w-full h-[400px] flex justify-center items-center gap-[16px]'>
			<Image src={errorPpok} width='100' height='100' />
			<Text size='sm' color='darkGray'>
				{errorMessageVariant[errorMessage]}
			</Text>
		</div>
	);
}
