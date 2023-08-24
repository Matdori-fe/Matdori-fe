'use client';
// TODO => 검색 나오면, 값을 입력하고 이후에 가게를 선택할때 그 값을 가져가는 작업이 필요.
import Header from '@/components/Header/Header';
import { useEffect, useState } from 'react';
import ChoiceStore from '../components/ChoiceStore';
import EmptyChoiceStore from '../components/EmptyChoiceStore';
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
import { StoreIndex } from '../Write_Type/Write_Type';

const WritePage = ({ params }: { params: { storeIndex: any } }) => {
  const [storeIndex, setStoreIndex] = useState(params.storeIndex);
  const [flavorRating, setFlavorRating] = useState<number | null>(null);
  const [underPricedRating, setUnderPricedRating] = useState<number | null>(
    null
  );
  const [cleanRating, setCleanRating] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageArr, setImageArr]: any = useState([]);
  //가게가 선택되어져잇는지에 대한 state
  const [isChoiceStore, setIsChoiceStore] = useState(false);

  const user = useRecoilValue(UserAtom);

  useEffect(() => {
    if (storeIndex === 'undefinded') {
      setIsChoiceStore(false);
    } else {
      setIsChoiceStore(true);
    }
    console.log(isChoiceStore, storeIndex);
  }, [storeIndex]);

  //로그인 실행 함수
  const WriteJokboFun = (): void => {
    if (storeIndex === null || isChoiceStore === false) {
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

  if (!params.storeIndex) {
    // Render your default content or redirect as needed
    return <div>Default Store Page</div>;
  }

  return (
    <div className="mb-[100px]">
      <Header left="back" kind={undefined} title="족보 작성하기" />
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
        {isChoiceStore === true ? (
          <ChoiceStore storeIndex={storeIndex} />
        ) : (
          <EmptyChoiceStore />
        )}

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
