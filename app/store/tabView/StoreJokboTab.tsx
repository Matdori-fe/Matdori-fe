'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import JokboBox from '../[storeIndex]/component/JokboBox';
import Button from '@/components/Button/Button';
import SmallTitle from '@/components/Title/SmallTitle';
import { RiBookmarkFill } from 'react-icons/ri';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import EmptyJokbo from '../[storeIndex]/component/EmptyJokbo';
import SelectTab from '@/components/SelectTab/SelectTab';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import ErrorPpok from '@/components/Error/ErrorPpok';
import { useInfiniteQuery } from 'react-query';
import { useObserver } from '@/hooks/useObserver';
import Loading from '@/components/Loading/Loading';
import JokboList from '@/components/ListComponent/JokboList';
type StoreIndexIn = {
  storeIndex: number;
};

type JokboInfoType = {
  jokboId: number;
  title: string;
  imgUrl: string;
  contents: string;
  totalRating: number;
  favoriteCnt: number;
  commentCnt: number;
};

const StoreJokboTab = ({ storeIndex }: StoreIndexIn) => {
  const [totalCount, setTotalCount] = useState(0);
  const [viewType, setViewType] = useState('최신순');

  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);
  function handleScroll() {
    const scrollTop = window.pageYOffset;
    requestAnimationFrame(() => {
      setIsFixed(scrollTop > 160);
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  ////////////////////////////////////////////////////////

  const getMyJokboList = ({ pageParam = null }: any) =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/jokbos`, {
        params: {
          cursor: pageParam,
          order: '최신순',
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        return res?.data.result;
      });

  let bottom = useRef(null);

  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery(
    ['jokboList'],
    getMyJokboList,
    {
      getNextPageParam: ({ hasNext, jokboList }) => {
        if (!hasNext) return undefined;

        const finalJokboId = jokboList[jokboList.length - 1].jokboId;
        return finalJokboId;
      },
    }
  );

  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  // 페이지 이동하면 삭제 모드 꺼지고, 저장했던 항목들 삭제
  useEffect(() => {}, []);

  //가게 당 족보 개수 불러오기
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/jokbo-count`)
      .then((response) => {
        setTotalCount(response.data.result.totalCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="mb-[50px] h-auto">
        <div
          className={`${
            isFixed ? 'w-full max-w-[412px] fixed left-6/12 top-12' : 'w-full'
          } z-30 bg-white`}
        >
          <SelectTab />
          <SmallTitle
            className="mt-3 mb-3 px-[20px]"
            sideComponent={
              <>
                <CustomSelect onSelectChange={setViewType} />
              </>
            }
          >
            <div className="flex items-center">
              <RiBookmarkFill className="mr-1 text-blue text-14" /> 족보{' '}
              {totalCount}개
            </div>
          </SmallTitle>
        </div>

        <div className="px-[20px]">
          <HorizonBar className="mb-4" />

          <div className={`${isFixed ? 'pt-[110px]' : ''}  flex flex-wrap`}>
            <JokboList storeIndex={storeIndex} />
          </div>
        </div>
      </div>
      <Button
        label="나만의 족보 작성하기"
        variant="active"
        modal={false}
        onClick={() => {}}
      />
    </>
  );
};

export default StoreJokboTab;
