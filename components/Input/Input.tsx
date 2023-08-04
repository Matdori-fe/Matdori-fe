"use client";
import { useState } from "react";
import leftContent from "./InputLeft";
import rightContent from "./InputRight";
import FiveMinTimer from "./Timer";

// Input에 props로 줄 값 제한
type InputSize = "small" | "big";
type LeftKind = "lense" | "back";
type RightKind = "cancel" | "redArrow" | "fiveMinTimer";

type InputType = {
  inputSize: InputSize;
  placeHolder?: string;
  left?: LeftKind;
  right?: RightKind;
  goTime?: boolean;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputType> = ({
  inputSize,
  placeHolder,
  left,
  right,
  goTime = false,
  onChange,
}) => {
  // input에 들어갈 값을 받아줄 state
  const [inputValue, setInputValue] = useState("");

  //제일 상위 박스 CSS 정의
  var boxCSS = "";
  if (inputSize === "small") {
    boxCSS =
      "w-[320px] sm:w-[calc(100%-92px)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4 mx-[46px]";
  } else if (inputSize === "big") {
    boxCSS =
      "w-[340px] sm:w-[calc(100%-82px)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4 mx-[41px]";
  }
  return (
    <div className="flex justify-center w-full">
      <div className={boxCSS}>
        <div className="flex items-center w-11/12">
          {left === "lense" ? leftContent.lense : null}
          {left === "back" ? leftContent.back : null}
          <input
            className={`w-full h-[40px] bg-lightGray text-black placeholder-gray rounded-xl text-[14px] font-Medium`}
            value={inputValue}
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
          {right === "redArrow" ? rightContent.redArrow : null}
          {right === "fiveMinTimer" ? <FiveMinTimer goTime={goTime} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Input;
