'use client';
// FIXME - 데이터 불러와서 처리해야됨 => 아직 API 미완성
import BigTitle from '@/components/Title/BigTitle';
import Text from '@/components/Text/Text';
import BigStoreComponent from './StoreCompoents/BigStoreComponent';
import BigStoreSkeleton from '@/app/Skeleton/BigStoreSkeleton';
import { useEffect, useState } from 'react';

const PopularJokbo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BigTitle className="mt-[30px] mb-1">
        나만 빼고 다 알고 있는 족보
      </BigTitle>
      <Text size="xs" color="gray" fontWeight="medium">
        가장 많은 사람들이 확인한 족보들을 한번에 확인해보세요.
      </Text>
      {/*데이터 불러와서 처리해야됨 => 아직 API 미완성*/}
      <div>
        {loading === true ? (
          <>
            <BigStoreSkeleton />
            <BigStoreSkeleton />
            <BigStoreSkeleton />
          </>
        ) : (
          <>
            <BigStoreComponent
              key={1}
              storeIndex={1}
              name="족보 제목"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              content="여기는 족보 내용을 작성하는 곳입니다. 이렇게 두줄까지 보여지기도 합니다."
            />
            <BigStoreComponent
              storeIndex={1}
              name="족보 제목"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              content="여기는 족보 내용을 작성하는 곳입니다. 이렇게 두줄까지 보여지기도 합니다."
            />
            <BigStoreComponent
              storeIndex={1}
              name="족보 제목"
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
              totalRating={4.9}
              content="여기는 족보 내용을 작성하는 곳입니다. 이렇게 두줄까지 보여지기도 합니다."
            />
          </>
        )}
      </div>
    </>
  );
};

export default PopularJokbo;
