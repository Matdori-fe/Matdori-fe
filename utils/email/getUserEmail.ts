export const getUserEmail = () => {
	if (typeof window !== 'undefined')
		return JSON.parse(localStorage.getItem('recoil-persist') || '').user.email;
};
