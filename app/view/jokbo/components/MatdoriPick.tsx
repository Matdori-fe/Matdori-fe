'use client';
import BigTitle from '@/components/Title/BigTitle';
import Text from '@/components/Text/Text';
import SmallStoreComponent from './StoreCompoents/SmallStoreComponent';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import axios from 'axios';
import SmallStoreSkeleton from '@/app/Skeleton/SmallStoreSkeleton';
import Toast from '@/components/Toast/Toast';

const MatdoriPick = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const myDepartMent = useRecoilValue(UserAtom).department;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/matdori-pick`
        );
        setList(result.data.result);
        setLoading(false);
      } catch (error) {
        Toast('Server Error');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BigTitle className="mt-[30px] mb-1">맛도리 PICK</BigTitle>
      <Text size="xs" color="gray" fontWeight="medium">
        맛도리에서 추천하는 가게들을 살펴보세요.
      </Text>
      <div className="w-full flex overflow-x-scroll mt-3 hide-scroll justify-center">
        <div className="w-full flex overflow-x-scroll mt-3 hide-scroll">
          {loading === true ? (
            <div className="flex scrollbar-hide">
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
            </div>
          ) : (
            <div className="w-full min-w-[310px] flex flex-nowrap overflow-x-scroll scrollbar-hide justify-between">
              {list.map(({ storeIndex, name, imgUrl }) => {
                return (
                  <SmallStoreComponent
                    key={storeIndex}
                    storeIndex={storeIndex}
                    name={name}
                    imgUrl={imgUrl}
                    totalRating={4.9}
                    kind="starScore"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MatdoriPick;
