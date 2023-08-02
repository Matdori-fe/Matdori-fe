// TODO: width 반응형 설정 필요
// TODO: onChange 연결 필요

export default function TextArea() {
	return (
		<textarea
			className='sm:w-[calc(412px-40px)] w-full border border-lightGray rounded-basic py-[10px] px-[12px] resize-none placeholder-gray'
			placeholder='내용을 작성해주세요.'
		></textarea>
	);
}
