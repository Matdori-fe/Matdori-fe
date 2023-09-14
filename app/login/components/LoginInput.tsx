'use client';
import { ChangeEvent } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';

type LoginInputType = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  inputmode?:
    | 'text'
    | 'search'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined;
  type?: string;
};

const LoginInput: React.FC<LoginInputType> = ({
  onChange,
  placeHolder,
  inputmode,
  type,
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div
        className={`w-full h-[40px] border-[1px] ${
          isFocused ? 'border-100' : 'border-lightGray'
        } rounded-[10px] px-[10px] flex flex-wrap justify-between items-center min-w-[200px]`}
      >
        <input
          inputMode={inputmode}
          className={`flex-grow h-[38px] bg-white text-black placeholder-gray placeholder-[14px] rounded-xl text-[14px] font-Medium`}
          placeholder={placeHolder}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
        />
        {value.length !== 0 ? (
          <div
            onClick={(e) => {
              setValue('');
              if (onChange) {
                onChange({
                  target: { value: '' },
                } as ChangeEvent<HTMLInputElement>);
              }
            }}
          >
            <RiCloseFill className="w-[18px] text-gray" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default LoginInput;
