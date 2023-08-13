"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import JokboBox from "../[storeIndex]/component/JokboBox";
import Button from "@/components/Button/Button";
import SmallTitle from "@/components/Title/SmallTitle";
import { RiArrowDownLine, RiBookmarkFill } from "react-icons/ri";
import HorizonBar from "@/components/HorizonBar/HorizonBar";
import EmptyJokbo from "../[storeIndex]/component/EmptyJokbo";
import SelectTab from "@/components/SelectTab/SelectTab";
import OlderSelectBox from "@/components/SelectBox/OrderSelectBox";
//FIXME - 아래 예시 컴포넌트 지워야함.

type StoreIndexIn = {
  storeIndex: number;
};

const StoreJokboTab = ({ storeIndex }: StoreIndexIn) => {
  const [totalCount, setTotalCount] = useState(0);
  const [jokboList, setJokboList] = useState([]);
  const [viewType, setViewType] = useState("day");
  // 스크롤 감지 부분
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    setIsFixed(window.scrollY >= 168);
  };

  useEffect(() => {
    console.log(viewType);
  }, [viewType]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/stores/${storeIndex}/jokbos?pageCount=1`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setTotalCount(response.data.result.jokboCnt);
        setJokboList(response.data.result.jokboList);
        console.log(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="mb-[150px] h-auto">
        <div
          className={`${
            isFixed ? "fixed left-6/12 top-12" : "w-full"
          } z-30 bg-white`}
        >
          <SelectTab />
          <SmallTitle
            className="mt-3 mb-1"
            sideComponent={
              <>
                <OlderSelectBox onSelectChange={setViewType} />
              </>
            }
          >
            <div className="flex items-center">
              <RiBookmarkFill className="text-blue text-14" /> 족보{totalCount}{" "}
              개
            </div>
          </SmallTitle>
          <HorizonBar className="mt-2" />
        </div>

        {totalCount === 0 ? (
          <>
            <EmptyJokbo />
          </>
        ) : (
          <>
            {jokboList.map((element) => {
              return (
                <JokboBox
                  jokboId={12}
                  title="이 집은 진짜 미쳤다"
                  contents="여기 진짜 미쳤어요. 너무 맛있다. 이렇게 정말 맜있네"
                  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeMqC_AL6OxqZoErED8V-6n0JJyHnvmr0QQ&usqp=CAU"
                  totalRating={4.8}
                  favoriteCnt={12}
                  commentCnt={35}
                />
              );
            })}
          </>
        )}
      </div>
      <Button
        label="나만의 족보 작성하기"
        variant="active"
        modal={false}
        onClick={() => {}}
      />
    </>
  );
};

export default StoreJokboTab;
