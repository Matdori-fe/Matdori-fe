"use client";
import Input from "@/components/Input/Input";
import SmallTitle from "@/components/Title/SmallTitle";
import Button from "@/components/Button/Button";
import RoundButton from "@/components/RoundButton/RoundButton";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useRecoilState } from "recoil";
import { UserAtom } from "@/app/status/UserAtom";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast/Toast";
import { ChangeEvent } from "react";
import CheckNotification from "@/components/CheckNotification/CheckNotification";

const pattern = /(inha\.edu|inha\.ac\.kr)$/;

const LoginBox: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

  const [user, setUser] = useRecoilState(UserAtom);

  const router = useRouter();

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    // email 형식 검사
    if (!pattern.test(e.target.value)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //로그인 실행 함수
  const loginFun = (): void => {
    if (id === "") {
      Toast("아이디를 입력해주세요.");
    } else if (!pattern.test(id)) {
      Toast("유효하지 않은 이메일 형식입니다.");
    } else if (password === "") {
      Toast("비밀번호를 입력해주세요.");
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/login`,
          {
            email: id,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setUser(response.data.result.data);
            router.push("/");
          }
        })
        .catch((error) => {
<<<<<<< HEAD
          console.log(error);
=======
>>>>>>> origin/MATDORI-60-jokbo
          if (error.response.status === 500) {
            Toast("네트워크 오류");
          } else if (error.response.status === 401) {
            Toast("아이디, 비밀번호가 잘못되었습니다.");
          } else if (error.response.status === 400) {
            Toast("아이디, 비밀번호가 누락되었습니다.");
          }
<<<<<<< HEAD
=======

          console.log(error);
>>>>>>> origin/MATDORI-60-jokbo
        });
    }
  };

  return (
    <>
      <SmallTitle className="mb-3">학번 이메일</SmallTitle>

      <Input
        inputSize="small"
        placeHolder="학번 이메일을 입력해주세요."
        right="cancel"
        type="email"
        value={id}
        onChange={handleIdChange}
      />
      <div className="w-full mt-2">
        {checkEmail ? (
          <CheckNotification
            label="이메일 형식에 적합합니다."
            variant="valid"
          />
        ) : (
          <CheckNotification
            label="@inha.ac.kr 또는 @inha.edu 메일 형식을 입력해주세요."
            variant="invalid"
          />
        )}
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
        value={password}
        placeHolder="비밀번호를 입력해주세요."
        right="cancel"
        type="password"
        onChange={handlePasswordChange}
      />

      <div className="flex mt-20 mb-12">
        <p className="font-Regular text-[12px] text-darkGray mr-3">
          아직 회원이 아니신가요?
        </p>
        <Link
          href={"/signup/email"}
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
