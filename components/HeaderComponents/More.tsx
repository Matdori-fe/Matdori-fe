import { useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { DeleteType } from './type/HeaderComponentsType';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Toast from '../Toast/Toast';
import { useRouter } from 'next/navigation';
const More = ({ id, kind }: DeleteType) => {
  const [showOptions, setShowOptions] = useState(false);
  const user = useRecoilValue(UserAtom);
  const router = useRouter();

  const handleOptionChange = (e: any) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'delete') {
      if (kind === 'jokbo') {
        axios
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
            if (response.status === 200) {
              Toast('삭제가 완료되었습니다.');
              router.back();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (kind === 'comment') {
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API}/users/${user.userId}/comments`,
            {
              jokboCommentIdList: [id],
            },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              Toast('삭제가 완료되었습니다.');
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    // Close the options
    setShowOptions(false);
  };

  return (
    <div className="relative inline-block">
      {kind === 'jokbo' && (
        <RiMore2Fill
          size="20"
          onClick={() => setShowOptions(!showOptions)}
          className="cursor-pointer"
        />
      )}

      {kind === 'comment' && (
        <RiMore2Fill
          size="12"
          onClick={() => setShowOptions(!showOptions)}
          className="cursor-pointer"
        />
      )}

      {showOptions && (
        <ul className="absolute mt-2 space-y-2 bg-white border border-gray-200 py-2 px-4 rounded shadow-lg ">
          <li>
            <button
              value="delete"
              onClick={handleOptionChange}
              className="text-100 hover:text-100 text-[12px] whitespace-nowrap"
            >
              삭제
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default More;
