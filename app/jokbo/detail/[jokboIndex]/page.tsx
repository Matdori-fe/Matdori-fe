import JokboDetailComponent from './components/JokboDetailComponent';
import JokboReview from './components/JokboReview';
import Header from '@/components/Header/Header';
import HorizonBar from '@/components/HorizonBar/HorizonBar';

const JokboDetail = (props: any) => {
  return (
    <>
      <div className="w-full px-2 mb-8">
        <Header left="back" right={['share', 'like', 'more']} />
        <JokboDetailComponent jokboIndex={props.params.jokboIndex} />
      </div>
      <HorizonBar className="border-t-[2px]" />
      <div className="w-full py-2">
        <JokboReview jokboIndex={props.params.jokboIndex} />
      </div>
    </>
  );
};

export default JokboDetail;
