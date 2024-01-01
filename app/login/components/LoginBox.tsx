'use client';
import Button from '@/components/Button/Button';
import RoundButton from '@/components/RoundButton/RoundButton';
import { useRef, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';
import { ChangeEvent } from 'react';
// import LoginInput from './LoginInput';
import Text from '@/components/Text/Text';
import CheckNotification from '@/components/CheckNotification/CheckNotification';
import { RiCloseFill } from 'react-icons/ri';

const pattern = /(inha\.edu|inha\.ac\.kr)$/;

interface LoginInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  isValid?: boolean;
}

// TODO: x 누르면 깜빡거리는 문제 해결
function LoginInput({ placeholder, value, onChange, isPassword, isValid = true }: LoginInputProps) {
  const inputRef = useRef(null);

  const [valid, invalid] = [
    'border border-lightGray rounded-[10px] w-full px-[12px] py-[10px] flex justify-between align-center',
    'border border-100 rounded-[10px] w-full px-[12px] py-[10px] flex justify-between align-center',
  ];

  const borderCSS = () => {
    if (value === '') return valid;
    else if (isValid) return valid;
    else return invalid;
  };

  return (
    <div className={borderCSS()}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={isPassword ? 'password' : 'text'}
        ref={inputRef}
        className='w-full text-sm placeholder-gray placeholder:text-sm '></input>
      {value && (
        <div
          id='input'
          className='flex justify-center h-[100%] items-center w-[16px]'
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}>
          <RiCloseFill className='h-[20px] w-[20px]' color='lightGray' />
        </div>
      )}
    </div>
  );
}

const LoginBox: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

  const [user, setUser] = useRecoilState(UserAtom);

  const router = useRouter();

  const handleIdChange = (value: string) => {
    setId(value);
    // email 형식 검사
    if (!pattern.test(value)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
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
          },
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
      <div className='w-full h-[60px]' />

      <div className='w-full flex flex-col gap-[20px]'>
        <div className='w-full flex flex-col gap-[10px]'>
          <LoginInput
            placeholder='학교 이메일을 입력해주세요.'
            value={id}
            onChange={handleIdChange}
            isValid={checkEmail}
          />
          <LoginInput
            placeholder='비밀번호를 입력해주세요.'
            value={password}
            onChange={handlePasswordChange}
            isPassword={true}
          />
        </div>

        <button
          onClick={loginFun}
          className='w-full h-[50px] bg-100 rounded-[15px] text-white font-bold text-lg'>
          로그인
        </button>

        <div className='flex justify-center w-full'>
          <div className='w-full flex justify-between max-w-[140px]'>
            <Link href={'/signup/email'} className='font-Medium text-[12px] text-gray'>
              회원가입
            </Link>
            <div className='text-[12px] text-lightGray mb-3'>|</div>

            <Link href={'/help/find-password'} className='font-Medium text-[12px] text-gray'>
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
