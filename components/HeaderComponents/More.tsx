'use client';
import { useState, useEffect } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { DeleteType } from './type/HeaderComponentsType';
import axios from 'axios';
import { UserAtom } from '@/atoms/UserAtom';
import { useRecoilValue } from 'recoil';

const More = ({ id, kind }: DeleteType) => {
  const [showOptions, setShowOptions] = useState(false);
  const user = useRecoilValue(UserAtom);

  const handleOptionChange = (e: any) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'delete') {
      // 삭제 동작을 수행하는 로직 추가
      const response = axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/jokbos`,
          {
            jokboIdList: [id],
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // 선택된 옵션 후에 select 박스 숨김
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.target.classList.contains('options-container')) {
        setShowOptions(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="options-container">
      <RiMore2Fill size="20" onClick={() => setShowOptions(!showOptions)} />
      {showOptions && (
        <select onChange={handleOptionChange}>
          <option value="delete">삭제</option>
        </select>
      )}
    </div>
  );
};

export default More;
