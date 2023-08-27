import { searchAtom } from '@/atoms/search/searchAtom';
import Text from '@/components/Text/Text';
import useSearchItem from '@/hooks/search/useSearchItem';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function RelatedSearchItem({ name, key, id }) {
	const [searchString, setSearchString] = useRecoilState(searchAtom);
	const { deleteItem, handleSearchItem } = useSearchItem();

	return (
		<Link
			href={`/search/${name}`}
			onClick={() => {
				handleSearchItem(name);
				setSearchString(name);
			}}
		>
			<Text
				size='sm'
				color='gray'
				fontWeight='semibold'
				className={`py-[16px] ${id !== 0 && 'border-t border-t-lightGray'}`}
			>
				{[...name].map((char) => {
					// 일치는 100, 불일치는 gray
					if (searchString.includes(char))
						return <span className='text-100'>{char}</span>;
					else return <span className='text-gray'>{char}</span>;
				})}
			</Text>
		</Link>
	);
}
