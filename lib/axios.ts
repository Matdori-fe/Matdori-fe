import axios, { Axios, AxiosResponse } from 'axios';

const instance: Axios = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API}`,
});

export { instance as axios };
