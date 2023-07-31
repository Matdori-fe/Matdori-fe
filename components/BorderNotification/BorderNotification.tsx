import Text from '../Text/Text';

export default function BorderNotification({
	label,
	modal = false,
}: {
	label: string;
	modal?: boolean;
}) {
	const DEFAULT_CLASS = `rounded-basic border border-lightGray py-[8px] px-[10px] [&>p]:inline-flex flex justify-center`;
	const isModal = (modal: boolean) =>
		modal
			? 'sm:w-[calc(412px-40px)] absolute bottom-[96px] w-[calc(100%-40px)]'
			: 'w-full';

	return (
		<div className={`${DEFAULT_CLASS} ${isModal(modal)}`}>
			<Text size='xs' color='darkGray'>
				{label}
			</Text>
		</div>
	);
}
