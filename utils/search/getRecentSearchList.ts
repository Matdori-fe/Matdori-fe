export function getRecentSearchList() {
	let resentSearchList;

	if (typeof window !== 'undefined') {
		resentSearchList =
			localStorage.getItem('recent-search-list') === null
				? []
				: JSON.parse(localStorage.getItem('recent-search-list') || '');
	}

	return resentSearchList;
}
