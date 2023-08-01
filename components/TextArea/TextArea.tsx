// TODO: width 반응형 설정 필요

export default function TextArea() {
	return (
		<textarea
			className='w-full border border-lightGray rounded-basic py-[10px] px-[12px] resize-none placeholder-gray'
			placeholder='내용을 작성해주세요.'
		></textarea>
	);
}
