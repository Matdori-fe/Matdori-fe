'use client';

import { categoryListAtom } from '@/atoms/home/category';
import RoundButton from '@/components/RoundButton/RoundButton';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'next/navigation';

export default function CategoryButtonContainer() {
  const categoryList = useRecoilValue(categoryListAtom);
  const router = useRouter();

  const searchParams = useSearchParams();
  const writeStore = searchParams.get('writeStore') === 'true';

  return (
    <div className="flex flex-wrap gap-[7px]">
      {categoryList.map((name) => (
        <RoundButton
          key={name}
          onClick={() => {
            if (writeStore) {
              router.replace(`/shop-list/${name}/?writeStore=true`);
            } else {
              router.push(`/shop-list/${name}`);
            }
          }}
          label={name}
        />
      ))}
    </div>
  );
}
