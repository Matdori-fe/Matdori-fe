"use client";
import { useState } from "react";
import leftContent from "./InputLeft";
import rightContent from "./InputRight";
import FiveMinTimer from "./Timer";
import { IsGoTimer } from "@/app/status/TimerAtom";
import { useRecoilValue } from "recoil";

// Input에 props로 줄 값 제한
type InputSize = "small" | "big";
type LeftKind = "lense" | "back";
type RightKind = "cancel" | "redArrow" | "fiveMinTimer";

type InputType = {
  type?: string;
  inputSize: InputSize;
  placeHolder?: string;
  left?: LeftKind;
  right?: RightKind;
  onChange?: (value: string) => void;
  leftOnClick?: () => void;
  rightOnClick?: () => void;
};

const Input: React.FC<InputType> = ({
  type = "text",
  inputSize,
  placeHolder,
  left,
  right,
  leftOnClick,
  rightOnClick,
  onChange,
}) => {
  // input에 들어갈 값을 받아줄 state
  const [inputValue, setInputValue] = useState("");
  const goTime = useRecoilValue(IsGoTimer);
  //제일 상위 박스 CSS 정의
  var boxCSS = "";
  if (inputSize === "small") {
    boxCSS =
      "w-[372px] sm:w-[calc(100%-40px)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4 mx-[20px]";
  } else if (inputSize === "big") {
    boxCSS =
      "w-[392px] sm:w-[calc(100%-20px)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4 mx-[10px]";
  }
  return (
    <div className="flex justify-center w-full">
      <div className={boxCSS}>
        <div className="flex items-center w-11/12">
          {left === "lense" ? (
            <div onClick={leftOnClick}>{leftContent.lense}</div>
          ) : null}
          {left === "back" ? leftContent.back : null}
          <input
            className={`w-full h-[40px] bg-lightGray text-black placeholder-gray rounded-xl text-[14px] font-Medium`}
            value={inputValue}
            type={type}
            placeholder={placeHolder}
            onChange={(e) => {
              setInputValue(e.target.value);
              // 콜백 함수 호출하여 입력 값 외부로 전달
              if (onChange) {
                onChange(e.target.value);
              }
            }}
          />
        </div>
        <div>
          {right === "cancel" ? (
            <div
              onClick={() => {
                setInputValue("");
                // 콜백 함수 호출하여 입력 값 외부로 빈 값 전달
                if (onChange) {
                  onChange("");
                }
              }}
            >
              {rightContent.cancel}
            </div>
          ) : null}
          {right === "redArrow" ? (
            <div onClick={rightOnClick}>{rightContent.redArrow}</div>
          ) : null}
          {right === "fiveMinTimer" ? <FiveMinTimer /> : null}
        </div>
      </div>
    </div>
  );
};

export default Input;
