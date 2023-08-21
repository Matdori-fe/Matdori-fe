import { axios } from '../axios';

export default async function logout() {
	return await axios.post('/logout');
}
