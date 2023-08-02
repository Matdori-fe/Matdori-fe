"use client";
import { useState } from "react";
import leftContent from "./InputLeft";
import rightContent from "./InputRight";
type InputSize = "small" | "big";
type LeftKind = "lense" | "back";
type RightKind = "cancel" | "redArrow" | "studentNumEmail";

type InputType = {
  inputSize: InputSize;
  placeHolder?: string;
  left?: LeftKind;
  right?: RightKind;
};

const Input: React.FC<InputType> = ({
  inputSize,
  placeHolder,
  left,
  right,
}) => {
  // input에 들어갈 값을 받아줄 state
  const [inputValue, setInputValue] = useState("");

  //제일 상위 박스 CSS 정의
  var boxCSS = "";
  if (inputSize === "small") {
    boxCSS =
      "w-[500px] md:w-[320px] h-[40px] bg-lightGray flex justify-between rounded-xl px-[20px] flex items-center";
  } else {
    boxCSS =
      "w-[500px] md:w-[320px] h-[100px] bg-lightGray flex justify-between rounded-xl px-[20px] flex items-center";
  }
  return (
    <>
      <div className={boxCSS}>
        <div className="flex items-center">
          {left === "lense" ? leftContent.lense : <></>}
          {left === "back" ? leftContent.back : <></>}
          <input
            className={`bg-lightGray text-black placeholder-gray rounded-xl w-[300px]`}
            value={inputValue}
            placeholder={placeHolder}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        {right === "cancel" ? (
          <div
            onClick={() => {
              setInputValue("");
            }}
          >
            {rightContent.cancel}
          </div>
        ) : (
          <></>
        )}
        {right === "redArrow" ? rightContent.redArrow : <></>}
        {right === "studentNumEmail" ? rightContent.studentNumEmail : <></>}
      </div>
    </>
  );
};

export default Input;
