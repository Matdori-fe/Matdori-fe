'use client';
import { RiMore2Fill } from 'react-icons/ri';
import { DeleteType } from './type/HeaderComponentsType';
import { useRouter } from 'next/navigation';
import { useModal } from '@/hooks/useModal';
import { modals } from '@/components/ModalContainer/ModalContainer';

const More = ({ id, kind }: DeleteType) => {
  const router = useRouter();

  const { openModal } = useModal();

  return (
    <div className="relative inline-block">
      {kind === 'jokbo' && (
        <RiMore2Fill
          size="20"
          onClick={() => {
            router.replace(`?kind=${kind}&id=${id}`);
            openModal({ id: 'more', Component: modals.more });
          }}
          className="cursor-pointer"
        />
      )}

      {kind === 'comment' && (
        <RiMore2Fill
          size="12"
          onClick={() => {
            router.replace(`?kind=${kind}&id=${id}`);
            openModal({ id: 'more', Component: modals.more });
          }}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default More;
