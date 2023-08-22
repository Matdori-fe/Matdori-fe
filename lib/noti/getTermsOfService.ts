import { CommonResponse } from '../CommonResponse';

type TermsOfServiceItem = {
	id: number;
	title: string;
	contents: string;
};

type TermsOfService = CommonResponse<TermsOfServiceItem[]>;

/**
 * 이용 약관을 가져오는 fetch
 * @returns result
 */
export const getTermsOfService = async () => {
	const result = await fetch(
		`${process.env.NEXT_PUBLIC_API}/terms-of-service`,
		{ cache: 'no-store' }
	);

	const data: TermsOfService = await result.json(); // 이 data는 AxiosResponse.data의 데이터와 일치
	return data.result;
};

// 테스트용 axios

// export const getTermsOfService = (): Promise<AxiosResponse<TermsOfService>> => {
// 	return axios.get('/terms-of-service');
// };
