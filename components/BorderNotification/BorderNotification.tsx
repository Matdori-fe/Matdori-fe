import Text from '../Text/Text';

export default function BorderNotification({ label }: { label: string }) {
	return (
		<div className='w-full rounded-basic border border-lightGray py-[8px] px-[10px] [&>p]:inline-flex flex justify-center'>
			<Text size='xs' color='darkGray'>
				{label}
			</Text>
		</div>
	);
}
