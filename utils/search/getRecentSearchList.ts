export function getRecentSearchList() {
	let list = [];

	if (typeof window !== 'undefined') {
		list =
			localStorage.getItem('recent-search-list') === null
				? []
				: JSON.parse(localStorage.getItem('recent-search-list') as string);
	}

	return list;
}
