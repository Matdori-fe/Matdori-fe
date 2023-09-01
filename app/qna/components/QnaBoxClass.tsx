//qna 박스가 모여있는 부분
import QnaTitleBox from './QnaTitleBox';
import { QnaType } from '../Qna_Type/QnaType';
import { qnaArr } from '../database/QnaDataBase';
const QnaBoxClass = () => {
	return (
		<div className='mx-4'>
			{qnaArr.map(({ qnaIndex, title, content }) => (
				<QnaTitleBox
					qnaIndex={qnaIndex}
					title={title}
					content={content}
					key={qnaIndex}
				/>
			))}
		</div>
	);
};
export default QnaBoxClass;
