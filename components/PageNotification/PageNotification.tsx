import Text from '../Text/Text';

export default function PageNotification({ label }: { label: string }) {
	return (
		<div className='w-full h-[400px] flex justify-center items-center whitespace-pre-wrap text-center'>
			<Text size='sm' color='darkGray'>
				{label}
			</Text>
		</div>
	);
}
