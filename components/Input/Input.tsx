import { useState } from "react";

// 사용법 => <Input width="400px" height="40px" placeHolder="뭐 좀 입력해봐"/>
// info에 width, height, placeHolder 값 입력하면 됨. 추가 css를 원하면 className에 tailWind적용해주세요.
// 안하면 default값으로 들어감.

type InputType = {
  width?: string;
  height?: string;
  placeHolder?: string;
  className?:string;
};

const Input: React.FC<InputType> = ({width,height,placeHolder,className}) => {
  
  const info:InputType = {width, height, placeHolder}

  const [isFocused, setIsFocused] = useState(false);

  // Input Default 값
  const defaultInputSize: InputType = {
    width: "320px",
    height: "40px",
    placeHolder: ""
  };

  // 기본 값과 info props를 병합하여 최종 스타일과 플레이스홀더 설정
  const mergedInputSize: InputType = { ...defaultInputSize, ...info };

  // 스타일 객체 생성
  const inputStyle = {
    width: mergedInputSize.width,
    height: mergedInputSize.height,
    backgroundColor: 'lightgray',
    borderRadius: '15px',
    paddingLeft: '30px',
    boxShadow: isFocused ? "0px 2px 0px rgba(0, 0, 0, 0.2)" : "none",
  };

  return (
    <>
      <input
        style={inputStyle} 
        placeholder={mergedInputSize.placeHolder}
        className={`${className}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  );
};

export default Input;
