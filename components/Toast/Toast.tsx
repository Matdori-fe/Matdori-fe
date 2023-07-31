import toast from 'react-simple-toasts';
import Text from '../Text/Text';

export function Toast(message: string) {
	toast(message, {
		clickClosable: true,
		render: (message) => (
			<div className='bg-neutral-400 h-[47px] md:w-[calc(768px-40px)] my-[58px] px-[20px] flex items-center justify-center rounded-basic'>
				<Text color='white' size='base' fontWeight='semibold'>
					{message}
				</Text>
			</div>
		),
	});
}

export default Toast;
