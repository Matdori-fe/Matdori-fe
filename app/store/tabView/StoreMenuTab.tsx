'use client';
import SelectTab from '@/components/SelectTab/SelectTab';
import { useState, useEffect } from 'react';
import MenuBlock from './components/MenuBlock';
import axios from 'axios';
import { RiEdit2Fill } from 'react-icons/ri';
import Toast from '@/components/Toast/Toast';
import PageNotification from '@/components/PageNotification/PageNotification';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading/Loading';

type StoreIndexIn = {
  storeIndex: number;
};

const StoreMenuTab = ({ storeIndex }: StoreIndexIn) => {
  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleScroll() {
    const scrollTop = window.pageYOffset;
    requestAnimationFrame(() => {
      setIsFixed(scrollTop > 165);
    });
  }
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //메뉴 값 받기
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/menu`
        );
        setMenuList(response.data.result);
        setLoading(true);
      } catch (error: any) {
        console.log(error);
        if (error.response.status === 404) {
          Toast('존재하지 않는 가게입니다.');
          router.back();
        } else {
          Toast('Server Error');
        }
        setLoading(true);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <>
      <div className="mb-[150px] h-auto flex flex-wrap justify-center select-tab">
        <div
          className={`${
            isFixed
              ? 'w-full max-w-[412px] fixed left-6/12 top-[50px]'
              : 'w-full'
          } z-30 bg-white`}
        >
          <SelectTab />
        </div>

        <div
          className={`w-full mx-4 flex flex-wrap justify-center ${
            isFixed ? 'mt-[49px]' : ''
          }`}
        >
          {loading === false ? (
            <>
              <Loading />
            </>
          ) : (
            <></>
          )}
          {menuList.length === 0 && loading ? (
            <>
              <PageNotification
                label={`이 가게에 메뉴가 없어요\n만약 아니라면 정보 수정 요청을 눌러주세요!`}
              />
            </>
          ) : (
            <></>
          )}
          {loading &&
            menuList.map(({ name, menus }, idx) => {
              if (idx === 0) {
                return <MenuBlock name={name} menus={menus} firstShow={true} />;
              }
              return <MenuBlock name={name} menus={menus} firstShow={false} />;
            })}
        </div>
        <div className="w-full mx-4 mt-6">
          <div className="bg-white rounded-2xl border border-lightGray py-3 justify-center">
            <div className="font-Regular text-[12px] text-darkGray text-center">
              ※ 메뉴 항목과 가격은 상단에 기재된 내용과 다를 수 있습니다.
            </div>

            <div
              className="font-Bold text-[12px] text-80 flex text-center justify-center"
              onClick={() => {
                Toast('정보 수정을 요청하였습니다.');
              }}
            >
              <RiEdit2Fill className="w-[12px] text-80 mt-1 mr-1" />
              정보 수정 요청하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreMenuTab;
