import axios, { Axios } from 'axios';

export const instance: Axios = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API}`,
});
