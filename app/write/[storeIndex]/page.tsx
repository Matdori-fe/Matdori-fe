'use client';
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import ChoiceStore from '../components/ChoiceStore';
import SmallTitle from '@/components/Title/SmallTitle';
import ChoiceStarScore from '../components/ChoiceStarScore';
import Text from '@/components/Text/Text';
import WriteJokbo from '../components/WriteJokbo';
import ChoicePhoto from '../components/ChoicePhoto';
import Button from '@/components/Button/Button';
import axios from 'axios';
import Toast from '@/components/Toast/Toast';
import { UserAtom } from '@/atoms/UserAtom';
import { useRecoilValue } from 'recoil';

const WritePage = ({ params }: { params: { storeIndex: number } }) => {
  const [storeIndex, setStoreIndex] = useState(params.storeIndex);
  const [flavorRating, setFlavorRating] = useState<number | null>(null);
  const [underPricedRating, setUnderPricedRating] = useState<number | null>(
    null
  );
  const [cleanRating, setCleanRating] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageArr, setImageArr]: any = useState([]);

  const user = useRecoilValue(UserAtom);

  useEffect(() => {
    console.log('이미지 배열', imageArr);
  }, [imageArr]);

  //로그인 실행 함수
  const WriteJokboFun = (): void => {
    if (storeIndex === null) {
      Toast('가게를 선택해주세요.');
    } else if (
      flavorRating === null ||
      underPricedRating === null ||
      cleanRating === null
    ) {
      Toast('모든 별점의 점수를 입력해주세요.');
    } else if (title === '') {
      Toast('제목을 입력해주세요.');
    } else if (content === '') {
      Toast('내용을 작성해주세요.');
    } else {
      const formData = new FormData();
      formData.append('flavorRating', flavorRating.toString());
      formData.append('underPricedRating', underPricedRating.toString());
      formData.append('cleanRating', cleanRating.toString());
      formData.append('storeIndex', params.storeIndex.toString());
      formData.append('title', title);
      formData.append('contents', content);

      // Append each image to formData
      for (const image of imageArr) {
        formData.append('images', image);
      }
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/jokbo`,
          formData,
          {
            headers: { 'Contest-Type': 'multipart/form-data' },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="mb-[100px]">
      <Header left="back" right="more" kind={undefined} title="족보 작성하기" />
      <SmallTitle
        sideComponent={
          <>
            <div className="px-[10px] py-[3px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex">
              <Text color="darkGray" size="xxs" fontWeight="normal">
                가게 변경하기
              </Text>
            </div>
          </>
        }
      >
        선택한 가게
      </SmallTitle>
      <div className="flex flex-wrap justify-center">
        <ChoiceStore storeIndex={storeIndex} />
        <SmallTitle
          className="mt-4"
          sideComponent={
            <div
              className="px-[10px] py-[2px] bg-white rounded-2xl border border-lightGray justify-center items-center inline-flex"
              onClick={() => {
                setFlavorRating(null);
                setUnderPricedRating(null);
                setCleanRating(null);
              }}
            >
              <Text color="darkGray" size="xxs" fontWeight="normal">
                별점 초기화
              </Text>
            </div>
          }
        >
          별점
        </SmallTitle>
        <div className={`flex mt-4 flex-wrap w-[120px] star:w-full`}>
          <ChoiceStarScore
            kind="flavorRating"
            score={flavorRating}
            setScore={setFlavorRating}
          />
          <ChoiceStarScore
            kind="underPricedRating"
            score={underPricedRating}
            setScore={setUnderPricedRating}
          />
          <ChoiceStarScore
            kind="cleanRating"
            score={cleanRating}
            setScore={setCleanRating}
          />
        </div>
        <div className="w-11/12 border-t-[1px] border-lightGray mb-4" />
      </div>

      <WriteJokbo setTitle={setTitle} setContent={setContent} />
      <ChoicePhoto setImageArr={setImageArr} />
      <Button
        label="족보 작성완료"
        onClick={WriteJokboFun}
        variant="active"
        writeIcon
      />
    </div>
  );
};

export default WritePage;
