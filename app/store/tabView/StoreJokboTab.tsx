'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import JokboBox from '../[storeIndex]/component/JokboBox';
import Button from '@/components/Button/Button';
import SmallTitle from '@/components/Title/SmallTitle';
import { RiBookmarkFill } from 'react-icons/ri';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import EmptyJokbo from '../[storeIndex]/component/EmptyJokbo';
import SelectTab from '@/components/SelectTab/SelectTab';
import CustomSelect from '@/components/SelectBox/CustomSelect';
import { useInView } from 'react-intersection-observer';

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
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  function handleScroll() {
    if (ScrollY > 161) {
      setScrollY(window.pageYOffset);
      setIsFixed(true);
    } else {
      setScrollY(window.pageYOffset);
      setIsFixed(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  ////////////////////////////////////////////////////////

  //무한 스크롤로 값 불러오기
  const [pageCount, setPageCount] = useState(1);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);

  // 무한 스크롤을 위해 다음 페이지를 불러오는 함수
  const getReview = useCallback(async () => {
    setLoading(true);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/jokbos`,
      {
        params: {
          order: viewType,
          pageCount: pageCount,
        },
      }
    );
    setHasNext(response.data.result.hasNext);
    console.log(jokboList);
    setJokboList((prevList) => [
      ...prevList,
      ...response.data.result.jokboList,
    ]);
    setLoading(false);
  }, [pageCount]);

  //getReview가 바뀌면 실행함.
  useEffect(() => {
    getReview();
  }, [getReview]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있을때
    if (inView && !loading && hasNext) {
      setPageCount((prevPageCount) => prevPageCount + 1);
    }
  }, [inView, loading]);

  //종류 변경시
  useEffect(() => {
    setJokboList([]);
    setPageCount(1);
  }, [viewType]);
  ////////////////////////////////////////////////////////

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
          {totalCount === 0 ? (
            <>
              <EmptyJokbo />
            </>
          ) : (
            <div className={`${isFixed ? 'pt-[110px]' : ''}`}>
              {jokboList.map(
                ({
                  jokboId,
                  title,
                  imgUrl,
                  contents,
                  totalRating,
                  favoriteCnt,
                  commentCnt,
                }) => {
                  return (
                    <div ref={ref}>
                      <JokboBox
                        jokboId={jokboId}
                        title={title}
                        contents={contents}
                        imgUrl={imgUrl}
                        totalRating={totalRating}
                        favoriteCnt={favoriteCnt}
                        commentCnt={commentCnt}
                      />
                    </div>
                  );
                }
              )}
            </div>
          )}
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
