export function getRecentSearchList() {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('recent-search-list') === null
			? []
			: JSON.parse(localStorage.getItem('recent-search-list') || '');
	}
}
