'use client';
import SelectTab from '@/components/SelectTab/SelectTab';
import { useState, useEffect } from 'react';
import MenuBlock from './components/MenuBlock';
import axios from 'axios';
import Link from 'next/link';
import { RiEdit2Fill } from 'react-icons/ri';
type StoreIndexIn = {
  storeIndex: number;
};

const StoreMenuTab = ({ storeIndex }: StoreIndexIn) => {
  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const selectTab = document.querySelector('.select-tab');
    if (selectTab) {
      const selectTabRect = selectTab.getBoundingClientRect();
      setIsFixed(selectTabRect.bottom >= 500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <>
      <div className="mb-[150px] h-auto flex flex-wrap justify-center select-tab">
        <div
          className={`${
            isFixed ? 'fixed left-6/12 top-[60px]' : 'w-full'
          } z-30 bg-white`}
        >
          <SelectTab />
        </div>

        <div
          className={`w-full mx-4 flex flex-wrap justify-center ${
            isFixed ? 'mt-[49px]' : ''
          }`}
        >
          {menuList.map(({ name, menus }) => {
            return <MenuBlock name={name} menus={menus} />;
          })}
        </div>
        <div className="w-full mx-4 mt-6">
          <div className="bg-white rounded-2xl border border-lightGray py-3 justify-center">
            <div className="font-Regular text-[12px] text-darkGray text-center">
              ※ 메뉴 항목과 가격은 상단에 기재된 내용과 다를 수 있습니다.
            </div>
            <Link href={'/'}>
              <div className="font-Bold text-[12px] text-80 flex text-center justify-center">
                <RiEdit2Fill className="w-[12px] text-80 mt-1 mr-1" />
                정보 수정 요청하기
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreMenuTab;
