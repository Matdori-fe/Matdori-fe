"use client";

import { AnimatePresence } from "framer-motion";
import ModalLayout from "./ModalLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import logo from "../../assets/image/logo.svg";
import Image from "next/image";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import JokboInfo from "../JokboInfo/JokboInfo";
import BorderNotification from "../BorderNotification/BorderNotification";
import Loading from "./Loading";
import { useModal } from "@/hooks/useModal";

export default function ShopModal() {
  const imageArr = new Array(3).fill(true);
  const [loading, setLoading] = useState(true);

  // TODO: 가게 3초 찾기.
  // useEffect(() => {
  // 	// NOTE: 조건문이 없으면 먼저 렌더링되서 이 코드가 실행되는 것 같음.
  // 	// if (showModal) {
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1000);
  // 	// }
  // 	return () => {
  // 		setLoading(true);
  // 	};
  // }, []);

  // const func = () => {
  // 	setLoading(true);
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1000);
  // };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  const func = () => {
    setLoading(true);
  };

  const { closeModal } = useModal();

  // TODO: 선택된 정렬을 서버로 보내서 데이터를 받아오는 로직이 필요
  return (
    <ModalLayout
      title={loading ? "맛도리가 가게를 찾고 있어요" : "맛도리가 추천하는 가게"}
      onClose={() => closeModal("shop")}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="sm:w-[calc(412px-40px)] w-full">
            <div className="flex justify-between w-full gap-[6px]">
              {imageArr.map((_) => (
                // TODO: 이미지 누르면 가게페이지로 이동
                <div key="1">
                  <Image
                    src={logo}
                    height="100"
                    alt="logo"
                    className="rounded-basic"
                  />
                  <div className="flex f-full justify-between p-[6px]">
                    <Text fontWeight="semibold">가메이</Text>
                    <JokboInfo kind="starScore" count={4.5} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-[20px]" />
            <BorderNotification
              modal
              label="* 맛도리 추천 가게는 별점과 무관하게 랜덤으로 추천됩니다."
            />
          </div>
          <Button modal label="다시 추천받기" variant="active" onClick={func} />
        </>
      )}
    </ModalLayout>
  );
}

// FIXME: a 태그 속 a 구조가 문제같음.
// FIXME: 모달의 타이틀이나 그런거 ㄹ따로 관리하는게 좋지 않을까?
