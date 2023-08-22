import Header from '@/components/Header/Header';
import QnaBoxClass from './components/QnaBoxClass';
const QnaPage = () => {
  return (
    <>
      <Header left="back" title="FAQ" />
      <div className="font-Regular w-calc(100%-8px) h-auto text-[12px] text-darkGray rounded-basic border-[1px] border-lightGray py-2 px-2 mx-4 pt-2.5 pl-5">
        ※ 맛도리에게 자주 묻는 질문들을 모아봤어요.
      </div>
      <QnaBoxClass />
    </>
  );
};

export default QnaPage;
