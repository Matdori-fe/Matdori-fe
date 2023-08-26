export const getUserEmail = () =>
	JSON.parse(localStorage.getItem('recoil-persist')).user.email;
