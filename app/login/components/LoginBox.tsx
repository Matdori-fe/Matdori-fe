'use client';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';
import { ChangeEvent } from 'react';
import LoginInput from './LoginInput';
import Text from '@/components/Text/Text';

const pattern = /(inha\.edu|inha\.ac\.kr)$/;

const LoginBox: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
    if (id === '') {
      Toast('아이디를 입력해주세요.');
    } else if (!pattern.test(id)) {
      Toast('유효하지 않은 이메일 형식입니다.');
    } else if (password === '') {
      Toast('비밀번호를 입력해주세요.');
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
            router.replace('/view/home/?tab=Home');
            Toast(`${response.data.result.data.nickname}님 환영합니다.`);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 500) {
            Toast('네트워크 오류');
          } else if (error.response.status === 401) {
            Toast('아이디, 비밀번호가 잘못되었습니다.');
          } else if (error.response.status === 400) {
            Toast('아이디, 비밀번호가 누락되었습니다.');
          }
        });
    }
  };

  return (
    <>
      <LoginInput
        placeHolder="학번 이메일을 입력해주세요."
        onChange={handleIdChange}
        inputmode="email"
        type="text"
      />
      <div className="w-full h-[10px]" />
      <LoginInput
        placeHolder="비밀번호를 입력해주세요."
        onChange={handlePasswordChange}
        inputmode="text"
        type="password"
      />

      <div className="w-full h-[10px]" />
      <button
        className="bg-100 w-full h-[50px] w-[calc(100%-40px)] justify-center items-center rounded-basic inline-flex my-[15px]"
        onClick={() => {
          loginFun();
        }}
      >
        <Text color="white" fontWeight="bold" size="lg">
          로그인
        </Text>
      </button>
      <div className="w-full flex justify-center">
        <div className="w-full flex justify-between max-w-[140px]">
          <Link
            href={'/signup/email'}
            className="font-Medium text-[12px] text-gray"
          >
            회원가입
          </Link>
          <div className="text-[12px] text-lightGray mb-3">|</div>

          <Link
            href={'/help/find-password'}
            className="font-Medium text-[12px] text-gray"
          >
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
