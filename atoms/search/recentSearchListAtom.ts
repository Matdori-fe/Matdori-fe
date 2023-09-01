import { getRecentSearchList } from '@/utils/search/getRecentSearchList';
import { atom } from 'recoil';

export const recentSearchListAtom = atom<string[]>({
	key: 'recentSearchListAtom',
	default: getRecentSearchList(),
});
