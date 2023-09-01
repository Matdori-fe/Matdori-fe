'use client';

import { searchAtom } from '@/atoms/search/searchAtom';
import Text from '@/components/Text/Text';
import useSearchItem from '@/hooks/search/useSearchItem';
import { useRouter } from 'next/navigation';
import { RiCloseFill } from 'react-icons/ri';
import { useSetRecoilState } from 'recoil';
import { useSearchParams } from 'next/navigation';

export default function RecentSearchItem({ label }: { label: string }) {
	const { deleteItem, handleSearchItem } = useSearchItem();
	const router = useRouter();
	const setSearchString = useSetRecoilState(searchAtom);

	const searchParams = useSearchParams();
	const writeStore: string = searchParams.get('writeStore') || 'undefined';

	return (
		<div className='gap-[10px] border flex items-center border-lightGray rounded-basic px-[10px] py-[4px] w-fit'>
			<div
				onClick={() => {
					router.push(
						writeStore === 'true'
							? `/search/${label}/?writeStore=true`
							: `/search/${label}`
					);

					handleSearchItem(label);
				}}
			>
				<Text size='xs' color='darkGray'>
					{label}
				</Text>
			</div>
			<RiCloseFill size='14' onClick={() => deleteItem(label)} />
		</div>
	);
}
