import { recentSearchListAtom } from '@/atoms/search/recentSearchListAtom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function useSearchItem() {
	const [resentSearchList, setRecentSearchListList] =
		useRecoilState(recentSearchListAtom);

	const handleSearchItem = (searchString: string) => {
		// 이미 포함되어있는 경우
		if (resentSearchList.includes(searchString))
			moveToFirstRecentItem(searchString);
		else pushItem(searchString);
	};

	const deleteItem = (searchString: string) => {
		setRecentSearchListList(
			resentSearchList.filter((item: string) => item !== searchString)
		);
	};

	const pushItem = (searchString: string) => {
		if (resentSearchList.length === 8) {
			// 초과하지 않게 하나 빼기
			const popList = [...resentSearchList].pop();

			// 새로운 아이템 추가하기
			setRecentSearchListList([searchString, ...popList]);
		} else setRecentSearchListList([searchString, ...resentSearchList]);
	};

	const moveToFirstRecentItem = (searchString: string) => {
		const popList = resentSearchList.filter(
			(item: string) => item !== searchString
		);

		setRecentSearchListList([searchString, ...popList]);
	};

	useEffect(() => {
		updateLocalStorage();
	}, [resentSearchList]);

	const updateLocalStorage = () => {
		window.localStorage.setItem(
			'recent-search-list',
			JSON.stringify(resentSearchList)
		);
	};

	return { handleSearchItem, deleteItem };
}

/**
 * 모두 삭제
 * 핸들러(이름 받아서 제거 또는 추가)
 *
 */
