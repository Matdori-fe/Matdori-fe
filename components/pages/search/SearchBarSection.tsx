import Input from '@/components/Input/Input';

export default function SearchBarSection() {
	return (
		<div>
			<Input
				inputSize='small'
				left='back'
				placeHolder='무엇이든 검색해보세요.'
				right='cancel'
			/>
		</div>
	);
}
