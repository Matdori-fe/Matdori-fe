'use client';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import SmallTitle from '@/components/Title/SmallTitle';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import { RiChat3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import Review from '@/components/Review/Review';
import EmptyJokbo from '@/app/store/[storeIndex]/component/EmptyJokbo';

type ReviewType = {
  commentIndex: number;
  createdAt: string;
  contents: string;
  checkDeleted: boolean;
  userIndex: number;
  nickname: string;
};

interface JokboDetailProps {
  jokboIndex: number;
}

const JokboReview: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
  const [kind, setKind] = useState('최신순');
  const [pageCount, setPageCount] = useState(1);
  const [ref, inView] = useInView();
  const [commentList, setReviewList] = useState<ReviewType[]>([]);
  const [commentCount, setReviewCount] = useState(0);
  // 무한 스크롤을 위해 다음 페이지를 불러오는 함수
  const getReview = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}/comments`, {
        params: {
          order: kind,
          pageCount: { pageCount },
        },
      })
      .then((response) => {
        console.log(response.data.result);
        setReviewList([commentList, ...response.data.result.commentList]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //getReview가 바뀌면 실행함.
  useEffect(() => {
    getReview();
  }, [pageCount]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있을때
    if (inView) {
      setPageCount(pageCount + 1);
    }
  }, [inView]);

  return (
    <>
      <SmallTitle sideComponent={<CustomSelect onSelectChange={setKind} />}>
        <div className="flex">
          <RiChat3Fill className="w-[14px] text-blue mt-0.5 mr-1" />
          댓글 {commentCount}개
        </div>
      </SmallTitle>
      <HorizonBar className="mt-2" />
      <div className="mx-4 mt-2">
        <div className="w-full h-1" />
        {commentCount === 0 ? (
          <>
            <EmptyJokbo />
          </>
        ) : (
          <>
            {commentList.map((element, idx) => (
              <div ref={ref}>
                <Review
                  key={idx}
                  content={element.contents}
                  heartCount={5}
                  title={element.nickname}
                  writeDay={element.createdAt}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default JokboReview;
