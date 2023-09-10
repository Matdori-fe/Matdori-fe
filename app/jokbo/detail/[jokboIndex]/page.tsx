import JokboDetailComponent from './components/JokboDetailComponent';
import JokboReview from './components/JokboReview';
import HorizonBar from '@/components/HorizonBar/HorizonBar';

const JokboDetail = ({ params }: { params: { jokboIndex: number } }) => {
  return (
    <>
      <div className="w-full mb-8">
        <JokboDetailComponent jokboIndex={params.jokboIndex} />
      </div>
      <HorizonBar className="border-t-[2px] absolute" />
      <div className="w-full py-2">
        <JokboReview jokboIndex={params.jokboIndex} />
      </div>
    </>
  );
};

export default JokboDetail;
