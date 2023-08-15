"use client";
import {
  RiHome5Line,
  RiHome5Fill,
  RiSearch2Line,
  RiSearch2Fill,
  RiBook3Line,
  RiUser2Line,
  RiUser2Fill,
  RiBook3Fill,
} from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavigationBar: React.FC = () => {
  const searchParams = useSearchParams();
  const key: string = searchParams.get("tab") || "none";
  const [tabValue, setTabValue] = useState(key);
  useEffect(() => {
    setTabValue(key);
  }, [key]);
  //sm:w-[412px] w-full h-[60px] flex items-center px-4

  return (
    <>
      <div className="w-full sm:w-[412px] h-[65px] flex justify-around border-t border-x border-lightGray pt-[10px] fixed bottom-0 bg-white">
        <>
          {/*홈 컴포넌트*/}
          <Link
            href={"/view/home?tab=Home"}
            className="w-[24px] h-[39px] flex flex-wrap justify-center items-center"
          >
            {tabValue === "Home" ? (
              <>
                <RiHome5Fill className="w-[24px] h-[24px] text-100" />
                <p className="font-Regular text-100">홈</p>
              </>
            ) : (
              <>
                <RiHome5Line className="w-[24px] h-[24px] text-darkGray" />
                <p className="font-Regular text-darkGray">홈</p>
              </>
            )}
          </Link>
          {/*검색 컴포넌트*/}
          <Link
            href={"/view/search?tab=Search"}
            className="w-[28px] h-[39px] flex flex-wrap justify-center items-center"
          >
            {tabValue === "Search" ? (
              <>
                <RiSearch2Fill className="w-[24px] h-[24px] text-100" />
                <p className="font-Regular text-100 whitespace-nowrap">검색</p>
              </>
            ) : (
              <>
                <RiSearch2Line className="w-[24px] h-[24px] text-darkGray" />
                <p className="font-Regular text-darkGray">검색</p>
              </>
            )}
          </Link>
          {/*족보 컴포넌트*/}
          <Link
            href={"/view/jokbo?tab=Jokbo"}
            className="w-[28px] h-[39px] flex flex-wrap justify-center items-center"
          >
            {tabValue === "Jokbo" ? (
              <>
                <RiBook3Fill className="w-[24px] h-[24px] text-100" />
                <p className="font-Regular text-100">족보</p>
              </>
            ) : (
              <>
                <RiBook3Line className="w-[24px] h-[24px] text-darkGray" />
                <p className="font-Regular text-darkGray">족보</p>
              </>
            )}
          </Link>
          {/*My 컴포넌트*/}
          <Link
            href={"/view/my?tab=My"}
            className="w-[24px] h-[39px] flex flex-wrap justify-center items-center"
          >
            {tabValue === "My" ? (
              <>
                <RiUser2Fill className="w-[24px] h-[24px] text-100" />
                <p className="font-Regular text-100">My</p>
              </>
            ) : (
              <>
                <RiUser2Line className="w-[24px] h-[24px] text-darkGray" />
                <p className="font-Regular text-darkGray">My</p>
              </>
            )}
          </Link>
        </>
      </div>
    </>
  );
};

export default NavigationBar;
