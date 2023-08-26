export function getRecentSearchList() {
	const resentSearchList = JSON.parse(
		localStorage.getItem('recent-search-list')
	);

	return resentSearchList ? resentSearchList : [];
}
