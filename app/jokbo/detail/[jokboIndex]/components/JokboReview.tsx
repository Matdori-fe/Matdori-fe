'use client';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import SmallTitle from '@/components/Title/SmallTitle';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import { RiChat3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Review from '@/components/Review/Review';
import { AxiosRequestConfig } from 'axios';
import EmptyJokbo from '@/app/jokbo/[storeIndex]/component/EmptyJokbo';

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
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);
  const [reviewCount, setReviewCount] = useState(0);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/jokbos/${jokboIndex}/comments`, {
        params: {
          order: kind,
          pageCount: 1,
        },
      })
      .then((response) => {
        console.log(response.data.result);
        setReviewCount(response.data.result.commentCnt);
        setReviewList(response.data.result.commentList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jokboIndex, kind]);
  return (
    <>
      <SmallTitle sideComponent={<CustomSelect onSelectChange={setKind} />}>
        <div className="flex">
          <RiChat3Fill className="w-[14px] text-blue mt-0.5 mr-1" />
          댓글 {reviewCount}개
        </div>
      </SmallTitle>
      <HorizonBar className="mt-2" />
      <div className="mx-4 mt-2">
        <div className="w-full h-1" />
        {reviewCount === 0 ? (
          <>
            <EmptyJokbo />
          </>
        ) : (
          <>
            {reviewList.map((element) => (
              <Review
                content={element.contents}
                heartCount={5}
                title={element.nickname}
                writeDay={element.createdAt}
              />
            ))}
          </>
        )}
      </div>

      {jokboIndex}
    </>
  );
};
export default JokboReview;
