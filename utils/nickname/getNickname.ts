export const getNickname = () =>
	JSON.parse(localStorage.getItem('recoil-persist')).user.nickname;
