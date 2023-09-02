import CommentList from '@/components/ListComponent/CommentList';

<<<<<<< HEAD
//컴포넌트에서 쓰일 ReviewType
type ReviewType = {
	title: string;
	content: string;
	writeDay: string;
	heartCount: number;
};

=======
>>>>>>> 82cb524 ([MATDORI-68] chore:rebase전 변경사항 commit)
interface JokboDetailProps {
	jokboIndex: number;
}

<<<<<<< HEAD
type ResponseType = {
	response: number | string | undefined;
};

const JokboReview: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
	const user = useRecoilValue(UserAtom);

	//댓글 쓰는 로직
	const [writeReview, setWriteReview] = useState('');

	const handleReviewChange = (e: ChangeEvent<HTMLInputElement>) => {
		setWriteReview(e.target.value);
	};

	//댓글 함수
	async function ClickWriteReview() {
		const response: ResponseType = await WriteFun({
			jokboIndex: jokboIndex,
			contents: writeReview,
			userIndex: user.userId,
		});
		if (response.response === 200) {
			Toast('댓글 작성에 성공하였습니다.');
			setWriteReview('');
			window.location.reload();
		} else {
			Toast('댓글 작성에 실패하였습니다.');
		}
	}

	return (
		<>
			<CommentList jokboIndex={jokboIndex} />
			<div className='fixed bottom-0 flex justify-center w-[calc(100%-40px)] sm:w-[calc(412px-40px)] bg-white pb-[20px] pt-[8px]'>
				<Input
					inputSize='small'
					inputmode='text'
					value={writeReview}
					onChange={handleReviewChange}
					placeHolder='댓글을 입력하세요.'
					right='redArrow'
					rightOnClick={ClickWriteReview}
				/>
			</div>
		</>
	);
=======
const JokboReview: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
  return (
    <>
      <CommentList jokboIndex={jokboIndex} />
    </>
  );
>>>>>>> 82cb524 ([MATDORI-68] chore:rebase전 변경사항 commit)
};
export default JokboReview;
