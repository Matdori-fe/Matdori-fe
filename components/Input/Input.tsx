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
};

const Input: React.FC<InputType> = ({
  inputSize,
  placeHolder,
  left,
  right,
  goTime = false,
}) => {
  // input에 들어갈 값을 받아줄 state
  const [inputValue, setInputValue] = useState("");

  //제일 상위 박스 CSS 정의
  var boxCSS = "";
  if (inputSize === "small") {
    boxCSS =
      "w-full ssm:w-[calc(320px)] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4";
  } else if (inputSize === "big") {
    boxCSS =
      "w-full lm:w-[340px] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-4";
  }
  return (
    <>
      <div className={boxCSS}>
        <div className="flex items-center w-11/12">
          {left === "lense" ? leftContent.lense : null}
          {left === "back" ? leftContent.back : null}
          <input
            className={`w-full h-[40px] bg-lightGray text-black placeholder-gray rounded-xl`}
            value={inputValue}
            placeholder={placeHolder}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          {right === "cancel" ? (
            <div
              onClick={() => {
                setInputValue("");
              }}
            >
              {rightContent.cancel}
            </div>
          ) : null}
          {right === "redArrow" ? rightContent.redArrow : null}
          {right === "fiveMinTimer" ? <FiveMinTimer goTime={goTime} /> : null}
        </div>
      </div>
    </>
  );
};

export default Input;
