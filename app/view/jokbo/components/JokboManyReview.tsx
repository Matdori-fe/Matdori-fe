'use client';
import BigTitle from '@/components/Title/BigTitle';
import Text from '@/components/Text/Text';
import SmallStoreComponent from './StoreCompoents/SmallStoreComponent';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SmallStoreSkeleton from '@/app/Skeleton/SmallStoreSkeleton';
import Toast from '@/components/Toast/Toast';

const JokboManyReview = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/best`
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
      <BigTitle className="mt-[30px] mb-1">족보 부자 가게 모음</BigTitle>
      <Text size="xs" color="gray" fontWeight="medium">
        족보가 많은 가게들만 모아서 한 눈에 확인해보세요.
      </Text>
      <div className="w-full">
        <div className="w-full flex overflow-x-scroll mt-3 hide-scroll">
          {loading === true ? (
            <div className="flex">
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
              <SmallStoreSkeleton />
            </div>
          ) : (
            <div
              className={`w-full flex flex-nowrap overflow-x-scroll scrollbar-hide ${
                list.length <= 3 ? 'justify-between' : ''
              }`}
            >
              {list.map(({ storeIndex, name, imgUrl, jokboCnt }) => {
                return (
                  <SmallStoreComponent
                    key={storeIndex}
                    storeIndex={storeIndex}
                    name={name}
                    imgUrl={imgUrl}
                    totalRating={jokboCnt}
                    kind="bookMark"
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

export default JokboManyReview;
