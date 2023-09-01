export function getRecentSearchList() {
	let resentSearchList = [];

	if (typeof window !== 'undefined') {
		resentSearchList =
			localStorage.getItem('recent-search-list') === null &&
			JSON.parse(localStorage.getItem('recent-search-list') as string);
	}

	return resentSearchList as string[];
}
