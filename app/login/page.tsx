"use client";
import Input from "@/components/Input/Input";
import SmallTitle from "@/components/Title/SmallTitle";
import Button from "@/components/Button/Button";
import { useState } from "react";

const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleIdChange = (value: string) => {
    // 학번 입력 값 변경시 이 함수가 호출됩니다.
    console.log("학번 입력 값:", value);
    // 이곳에서 받아온 입력 값을 원하는 로직으로 처리할 수 있습니다.
  };

  const handlePasswordChange = (value: string) => {
    // 비밀번호 입력 값 변경시 이 함수가 호출됩니다.
    console.log("비밀번호 입력 값:", value);
    // 이곳에서 받아온 입력 값을 원하는 로직으로 처리할 수 있습니다.
  };

  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-full flex justify-center flex-wrap mt-64 mb-20">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
        </div>
        <p className="w-fit font-Bold text-[15px] text-100">MATDORI</p>
      </div>

      <div className="w-full ml-[40px]">
        <SmallTitle className="mb-3">학번 이메일</SmallTitle>
      </div>
      <Input
        inputSize="small"
        placeHolder="학번을 입력해주세요."
        right="cancel"
        onChange={handleIdChange}
      />
      <div className="w-full ml-[40px] mt-4">
        <SmallTitle className="mb-3">비밀번호</SmallTitle>
      </div>
      <Input
        inputSize="small"
        placeHolder="비밀번호를 입력해주세요."
        right="cancel"
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default Login;
