"use client";
import Input from "@/components/Input/Input";
import SmallTitle from "@/components/Title/SmallTitle";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleIdChange = (value: string) => {
    setId(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  //로그인 실행 함수
  const loginFun = (): void => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/login`, {
        email: id,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-full flex justify-center flex-wrap mt-64 mb-20">
        <div className="w-full flex justify-center">
          <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
        </div>
        <p className="w-fit font-Bold text-[15px] text-100">MATDORI</p>
      </div>

      <div className="w-full ml-[40px] mb-3">
        <SmallTitle className="ml-2">학번 이메일</SmallTitle>
      </div>

      <Input
        inputSize="small"
        placeHolder="학번을 입력해주세요."
        right="cancel"
        onChange={handleIdChange}
      />
      <div className="w-full ml-[40px]">
        <div className="font-SemiBold text-[12px] text-100 ml-2 mt-2">
          학교 메일: @inha.ac.kr | @inha.edu
        </div>
      </div>

      <div className="w-full ml-[40px] mt-4">
        <SmallTitle className="mb-3 ml-2">비밀번호</SmallTitle>
      </div>
      <Input
        inputSize="small"
        placeHolder="비밀번호를 입력해주세요."
        right="cancel"
        onChange={handlePasswordChange}
      />

      <div className="flex mt-20 mb-24">
        <p className="font-Regular text-[12px] text-darkGray mr-3">
          아직 회원이 아니신가요?
        </p>
        <Link
          href={"/signup"}
          className="font-Regular text-[12px] text-100 flex"
        >
          회원가입
          <AiOutlineArrowRight className="text-[14px] mt-[1.5px] ml-[1px]" />
        </Link>
      </div>

      <Button
        label="로그인"
        onClick={() => {
          loginFun();
        }}
        variant="active"
        modal={false}
      />
    </div>
  );
};

export default Login;
