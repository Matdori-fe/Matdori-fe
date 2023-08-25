import SmallButtonBar from '@/components/Button/SmallButton';

export default function LikesAndActivitySection() {
	return (
		<div className='flex justify-between gap-[10px]'>
			<SmallButtonBar type='myLike' />
			<SmallButtonBar type='myActivity' />
		</div>
	);
}
