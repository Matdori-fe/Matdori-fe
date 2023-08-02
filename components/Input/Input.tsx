"use client";
import { useState } from "react";
import leftContent from "./InputLeft";
import rightContent from "./InputRight";
import FiveMinTimer from "./Timer";
type InputSize = "small" | "big";
type LeftKind = "lense" | "back";
type RightKind = "cancel" | "redArrow" | "studentNumEmail" | "fiveMinTimer";

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
      "w-full sm:w-[380px] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-[20px]";
  } else if (inputSize === "big") {
    boxCSS =
      "w-full md:w-[340px] h-[40px] bg-lightGray flex justify-between items-center rounded-xl px-[20px]";
  }
  return (
    <>
      <div className={boxCSS}>
        <div className="flex items-center">
          {left === "lense" ? leftContent.lense : null}
          {left === "back" ? leftContent.back : null}
          <input
            className={`h-[40px] bg-lightGray text-black placeholder-gray rounded-xl w-[300px]`}
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
          {right === "studentNumEmail" ? rightContent.studentNumEmail : null}
          {right === "fiveMinTimer" ? <FiveMinTimer goTime={goTime} /> : null}
        </div>
      </div>
    </>
  );
};

export default Input;
