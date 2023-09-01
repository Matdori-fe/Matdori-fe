export const getNickname = () => {
	if (typeof window !== 'undefined')
		return JSON.parse(localStorage.getItem('recoil-persist') || '').user
			.nickname;
};
