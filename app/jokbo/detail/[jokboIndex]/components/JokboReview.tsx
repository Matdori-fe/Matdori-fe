import CommentList from '@/components/ListComponent/CommentList';

interface JokboDetailProps {
  jokboIndex: number;
}

const JokboReview: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
  return (
    <>
      <CommentList jokboIndex={jokboIndex} />
    </>
  );
};
export default JokboReview;
