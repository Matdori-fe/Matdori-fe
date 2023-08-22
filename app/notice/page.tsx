import Header from '@/components/Header/Header';
import NoticeClass from './components/NoticeClass';
const NoticePage = () => {
  return (
    <>
      <Header left="back" right="roundButton" title="공지사항" />
      <div className="font-Regular w-calc(100%-8px) h-auto text-[12px] text-darkGray rounded-basic border-[1px] border-lightGray py-2 px-2 mx-4 pt-2.5 pl-5">
        ※ 맛도리 팀이 전달하는 공지사항을 확인해보세요.
      </div>

      <NoticeClass />
    </>
  );
};

export default NoticePage;
