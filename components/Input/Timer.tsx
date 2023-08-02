"use client";
import { useState, useEffect } from "react";

type TimerBoolean = {
  goTime: boolean;
};

const FiveMinTimer: React.FC<TimerBoolean> = ({ goTime }) => {
  //5분을 세주는 타이머 => state는 초 기준, 5분은 300초
  const [seconds, setSeconds] = useState<number>(300);
  //true:측정 시작, false면 측정 안함

  useEffect(() => {
    if (goTime === true) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [goTime]);

  function showTime(second: number): string {
    var minute = Math.floor(second / 60);
    second = second % 60;
    if (second >= 10) {
      return minute + ":" + second;
    }
    return minute + ":0" + second;
  }

  return (
    <>
      {goTime === true ? (
        <div className="text-100 font-Medium mr-[10px]">
          {showTime(seconds)}
        </div>
      ) : (
        <div className="text-gray font-Medium mr-[10px]">
          {showTime(seconds)}
        </div>
      )}
    </>
  );
};

export default FiveMinTimer;
