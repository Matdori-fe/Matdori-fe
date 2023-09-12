'use client';

import ModalLayout from './ModalLayout';
import { useModal } from '@/hooks/useModal';
import Text from '../Text/Text';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/atoms/UserAtom';
import Toast from '../Toast/Toast';
import { useRouter } from 'next/navigation';

export default function MoreModal() {
  const { closeModal } = useModal();
  const router = useRouter();
  const user = useRecoilValue(UserAtom);
  let kind: any = null;
  let id: any = null;
  const handleOptionChange = ({ clickKind }: any) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    kind = urlParams.get('kind');
    id = Number(urlParams.get('id'));

    if (clickKind === 'delete') {
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
    closeModal('more');
  };

  return (
    <ModalLayout variant="small" onClose={() => closeModal('more')}>
      <ul className="flex flex-col items-center w-full overflow-scroll scrollbar-hide">
        <li
          onClick={() => {
            handleOptionChange({ clickKind: 'delete' });
          }}
        >
          <Text fontWeight="semibold" color="100">
            삭제{kind} {id}
          </Text>
        </li>
      </ul>
      <div className="w-full h-[10px] m-[30px]" />
    </ModalLayout>
  );
}
