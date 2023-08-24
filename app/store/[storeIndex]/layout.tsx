'use client';
import Header from '@/components/Header/Header';
import StoreInfo from './component/StoreInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Button from '@/components/Button/Button';

interface StoreIndexType {
  storeIndex: number;
}

const JokboIntroPage = ({ storeIndex }: StoreIndexType) => {
  const [inFavoriteId, setInFavoriteId] = useState(null);

  const userInfo = useRecoilValue(UserAtom);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/info-header?userIndex=${userInfo.userId}`,
          {
            withCredentials: true,
          }
        );
        setInFavoriteId(result.data.result.favoriteStoreIndex);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [storeIndex]);

  return (
    <>
      <Header
        left="back"
        right={['share', 'like']}
        kind="store"
        id={storeIndex}
        title=""
        inFavoriteId={inFavoriteId}
      />
      <StoreInfo storeIndex={storeIndex} />
      <Button
        label="나만의 족보 작성하기"
        variant="active"
        modal={false}
        onClick={() => {}}
        href={`/write/${storeIndex}`}
      />
    </>
  );
};

const JokboLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!Array.isArray(params.storeIndex)) {
      setCurrentIndex(Number(params.storeIndex));
    }
  }, [params]);

  return (
    <>
      <JokboIntroPage storeIndex={currentIndex} />
      {children}
    </>
  );
};

export default JokboLayout;
