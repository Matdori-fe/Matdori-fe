'use client';
import SelectTab from '@/components/SelectTab/SelectTab';
import { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
import DayTimeText from './components/DayTimeText';
import BlockComponent from './components/BlockComponent';
import Text from '@/components/Text/Text';
import axios from 'axios';
import StoreTime from './components/StoreTime';
import Map from './components/StoreMap';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';

type StoreIndexIn = {
  storeIndex: number;
};
type StoreTimeArr = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};
type StoreInfo = {
  address: string;
  phoneNumber: string;
  time: StoreTimeArr;
};
const StoreInfoTab = ({ storeIndex }: StoreIndexIn) => {
  const router = useRouter();

  const [storeInfo, setStoreInfo] = useState<StoreInfo>({
    address: '',
    phoneNumber: '',
    time: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
    },
  });
  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);
  function handleScroll() {
    const scrollTop = window.pageYOffset;
    requestAnimationFrame(() => {
      setIsFixed(scrollTop > 165);
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/information`
        );
        setStoreInfo(response.data.result);
        console.log(response.data.result);
      } catch (error: any) {
        if (error.response.status === 404) {
          Toast('존재하지 않는 가게입니다.');
          router.back();
        } else {
          Toast('Server Error');
        }
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <>
      <div className="mb-[100px] h-auto">
        <div
          className={`${
            isFixed
              ? 'w-full max-w-[412px] fixed h-auto -6/12 top-[50px]'
              : 'w-full'
          } z-30 bg-white `}
        >
          <SelectTab />
        </div>
        <div className="w-full px-[20px] pt-[10px]">
          {/* 여기서부터 코드 시작 */}
          <BlockComponent
            title="영업시간"
            sideComponent={<StoreTime storeTimeArr={storeInfo.time} />}
          />
          <BlockComponent
            title="전화번호"
            sideComponent={
              <Text fontWeight="medium" color="black" size="xs">
                {storeInfo.phoneNumber}
              </Text>
            }
          />
          <BlockComponent
            title="가게주소"
            sideComponent={
              <Text fontWeight="medium" color="black" size="xs">
                {storeInfo.address}
              </Text>
            }
          />

          <div
            id="map"
            className="w-full mt-[20px] h-[242px] rounded-basic border-lightGray border-[1px] relative z-0"
          >
            <Map address={storeInfo.address} />
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreInfoTab;
