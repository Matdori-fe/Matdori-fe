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
  const [jokboList, setJokboList] = useState<JokboInfoType[]>([]);
  const [viewType, setViewType] = useState('최신순');
  const [hasNext, setHasNext] = useState<boolean>(false);
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

      // keepPreviousData: true, // 새 데이터를 요청해 갈아끼우기 직전까지 이전 데이터 유지
    }
  );

  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
  });

  useEffect(() => {
    console.log(status);
  }, [status]);

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
      <div className="mb-[150px] h-auto">
        <div
          className={`${
            isFixed ? 'fixed left-6/12 top-12' : 'w-full'
          } z-30 bg-white`}
        >
          <SelectTab />
          <SmallTitle
            className="mt-3 mb-3"
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
          <HorizonBar />
        </div>

        <div className="mx-4">
          <div className={`${isFixed ? 'pt-[110px]' : ''}  flex flex-wrap`}>
            {status === 'loading' && <Loading />}
            {status === 'error' && (
              <ErrorPpok errorMessage="serverError" variant="normal" />
            )}
            {status === 'success' &&
              data.pages.map((group, i) => (
                <>
                  {group.jokboList.map(
                    ({
                      jokboId,
                      title,
                      imgUrl,
                      contents,
                      totalRating,
                      favoriteCnt,
                      commentCnt,
                    }: JokboInfoType) => (
                      <>
                        <JokboBox
                          jokboId={jokboId}
                          title={title}
                          contents={contents}
                          imgUrl={imgUrl}
                          totalRating={totalRating}
                          favoriteCnt={favoriteCnt}
                          commentCnt={commentCnt}
                        />
                      </>
                    )
                  )}
                </>
              ))}
          </div>
        </div>
        <div ref={bottom} />
        {/* {hasNextPage ? <div ref={bottom}></div> : <p>끝</p>} */}
        {isFetchingNextPage && <Loading />}
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
