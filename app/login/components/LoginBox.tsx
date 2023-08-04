"use client";
import Input from "@/components/Input/Input";
import SmallTitle from "@/components/Title/SmallTitle";
import Button from "@/components/Button/Button";
import RoundButton from "@/components/RoundButton/RoundButton";
import { use, useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useRecoilState } from "recoil";
import { UserAtom } from "@/app/status/UserAtom";

const LoginBox: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useRecoilState(UserAtom);

  const handleIdChange = (value: string) => {
    console.log(user);
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
        if (response.status === 200) {
          setUser(response.data.result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SmallTitle className="mb-3">학번 이메일</SmallTitle>

      <Input
        inputSize="small"
        placeHolder="학번을 입력해주세요."
        right="cancel"
        onChange={handleIdChange}
      />
      <div className="w-full ml-[20px]">
        <div className="font-SemiBold text-[12px] text-100 ml-2 mt-2">
          학교 메일: @inha.ac.kr | @inha.edu
        </div>
      </div>

      <SmallTitle
        className="mb-3 mt-3"
        sideComponent={
          <Link href={"/forget-password"}>
            <RoundButton label="비밀번호 찾기" onClick={() => {}} />
          </Link>
        }
      >
        비밀번호
      </SmallTitle>
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
    </>
  );
};

export default LoginBox;
