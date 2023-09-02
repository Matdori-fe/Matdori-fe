'use client';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BigTitle from '@/components/Title/BigTitle';
import Text from '@/components/Text/Text';
import SmallStoreComponent from './StoreCompoents/SmallStoreComponent';
import SmallStoreSkeleton from '@/app/Skeleton/SmallStoreSkeleton';
import EmptySmallStoreComponent from './StoreCompoents/EmptySmallStoreComponent';
import Toast from '@/components/Toast/Toast';
import { Skeleton } from 'antd';
// FIXME => list에 값 담아서 map으로 뿌려주는 작업 필요. 지금은 그냥 넣어놓음.

const DepartMentRecommened: React.FC = () => {
  const myDepartMent = useRecoilValue(UserAtom).department;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/department?department=${myDepartMent}`
        );
        setList(result.data.result);
        setLoading(false);
      } catch (error: any) {
        if (error.response.status === 404) {
          Toast('존재하지 않는 학과입니다.');
        } else if (error.response.status === 500) {
          Toast('Server Error');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [myDepartMent]);

  return (
    <>
      {loading ? (
        <>
          <BigTitle className="mt-[30px] mb-1">학과 탐색중</BigTitle>

          <Text size="xs" color="gray" fontWeight="medium">
            우리 학과 사람들이 가장 많이 찾는 맛도리를 찾아보고 있어요!!
          </Text>
        </>
      ) : (
        <>
          <BigTitle className="mt-[30px] mb-1">
            {myDepartMent}의 맛도리
          </BigTitle>
          <Text size="xs" color="gray" fontWeight="medium">
            우리 학과 사람들이 가장 많이 찾는 맛도리만 모아봤어요.
          </Text>
        </>
      )}

      <div className="flex w-full mt-3 overflow-x-scroll hide-scroll">
        {loading === true ? (
          <>
            <div className="flex overflow-x-scroll scrollbar-hide">
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
            </div>
          </>
        ) : (
          <>
            <div
              className={`w-full flex flex-nowrap overflow-x-scroll scrollbar-hide gap-[10px] ${
                list.length <= 3 ? 'justify-between' : ''
              }`}
            >
              {list.map(({ storeIndex, name, imgUrl, totalRating, kind }) => (
                <SmallStoreComponent
                  key={storeIndex}
                  storeIndex={storeIndex}
                  name={name}
                  imgUrl={imgUrl}
                  totalRating={totalRating}
                  kind={kind}
                />
              ))}
              {list.length < 3 && <EmptySmallStoreComponent />}
              {list.length < 2 && <EmptySmallStoreComponent />}
              {list.length < 1 && <EmptySmallStoreComponent />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DepartMentRecommened;
