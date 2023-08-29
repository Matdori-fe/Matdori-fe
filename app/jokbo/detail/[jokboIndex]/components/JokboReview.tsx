'use client';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import SmallTitle from '@/components/Title/SmallTitle';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import { RiChat3Fill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import Input from '@/components/Input/Input';
import { ChangeEvent } from 'react';
import WriteFun from './WriteFun';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Toast from '@/components/Toast/Toast';
import CommentList from '@/components/ListComponent/CommentList';

//컴포넌트에서 쓰일 ReviewType
type ReviewType = {
  title: string;
  content: string;
  writeDay: string;
  heartCount: number;
};

interface JokboDetailProps {
  jokboIndex: number;
}

type ResponseType = {
  response: number | string | undefined;
};

const JokboReview: React.FC<JokboDetailProps> = ({ jokboIndex }) => {
  const user = useRecoilValue(UserAtom);

  const [kind, setKind] = useState('최신순');
  const [commentCount, setReviewCount] = useState(0);

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
      <SmallTitle sideComponent={<CustomSelect onSelectChange={setKind} />}>
        <div className="flex">
          <RiChat3Fill className="w-[14px] text-blue mt-0.5 mr-1" />
          댓글 {commentCount}개
        </div>
      </SmallTitle>
      <div className="border-b-[1.5px] border-lightGray mt-2" />
      <div>
        <CommentList jokboIndex={jokboIndex} />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-10/12 max-w-[350px] fixed bottom-4 mx-[20px]">
          <Input
            inputSize="small"
            inputmode="text"
            value={writeReview}
            onChange={handleReviewChange}
            placeHolder="댓글을 입력하세요."
            right="redArrow"
            rightOnClick={ClickWriteReview}
          />
        </div>
      </div>
    </>
  );
};
export default JokboReview;
