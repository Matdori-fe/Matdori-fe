export function getRecentSearchList() {
	let resentSearchList;

	if (typeof window !== 'undefined') {
		resentSearchList = JSON.parse(
			localStorage.getItem('recent-search-list') || ''
		);
	}

	return resentSearchList ? resentSearchList : [];
}
