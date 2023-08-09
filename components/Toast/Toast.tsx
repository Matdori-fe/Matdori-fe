import toast from 'react-simple-toasts';
import Text from '../Text/Text';

// FIXME: 토스트간 여백이 너무 큼
// FIXME: 토스트 px가 너무 작음
export function Toast(message: string) {
	toast(message, {
		clickClosable: true,
		render: (message) => (
			<div className='bg-neutral-400 h-[47px] sm:w-[calc(768px-40px)] mb-[58px] px-[10px] flex items-center justify-center rounded-basic'>
				<Text color='white' size='base' fontWeight='semibold'>
					{message}
				</Text>
			</div>
		),
	});
}

export default Toast;
