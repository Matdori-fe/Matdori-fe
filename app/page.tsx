"use client";
import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import Header from "@/components/Header/Header";
import Link from "next/link";
import SortModal from "@/components/Modal/SortModal";
import ShopModal from "@/components/Modal/ShopModal";
import MenuModal from "@/components/Modal/MenuModal";
import SortButton from "@/components/SortButton/SortButton";
import StarRate from "@/components/StarRate/StarRate";
import TextArea from "@/components/TextArea/TextArea";
import SelectTab from "@/components/SelectTab/SelectTab";
import StatusBar from "@/components/StatusBar/StatusBar";
import Input from "@/components/Input/Input";
import { useRecoilState } from "recoil";
import { TimerAtom, IsGoTimer } from "@/app/status/TimerAtom";

import { useEffect } from "react";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: Props) => {
  const [seconds, setSeconds] = useRecoilState(TimerAtom);
  const [goTime, setGoTime] = useRecoilState(IsGoTimer);
  useEffect(() => {
    if (seconds === 0) {
      // 0이 되었을 때 경고창을 표시하는 로직
      alert("타이머가 종료되었습니다!");
    }
  }, [seconds]);

  return (
    <div>
      <Input
        inputSize="small"
        left="back"
        placeHolder="뭐좀 입력해봐!"
        right="cancel"
      />
      <Input
        inputSize="big"
        left="back"
        placeHolder="뭐좀 입력해봐!"
        right="fiveMinTimer"
      />
      <button onClick={() => setGoTime(true)}>타이머 시작</button>
    </div>
  );
};

export default Home;
