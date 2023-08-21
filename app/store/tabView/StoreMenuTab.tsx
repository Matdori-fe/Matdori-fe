'use client';
import SelectTab from '@/components/SelectTab/SelectTab';
import HorizonBar from '@/components/HorizonBar/HorizonBar';
import { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
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
    setIsFixed(window.scrollY >= 175);
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
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [storeIndex]);

  return (
    <>
      <div className="mb-[150px] h-auto flex flex-wrap justify-center">
        <div
          className={`${
            isFixed ? 'fixed left-6/12 top-12 w-full' : 'w-full'
          } z-30 bg-white`}
        >
          <SelectTab />
        </div>

        <div className="w-full mx-4 flex flex-wrap justify-center">
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
        <Button
          label="나만의 족보 작성하기"
          variant="active"
          modal={false}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default StoreMenuTab;
