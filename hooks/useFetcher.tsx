import ErrorPpok from '@/components/Error/ErrorPpok';
import Loading from '@/components/Loading/Loading';
import { AxiosError, AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from 'react-query';

export function useFetcher<T>(query) {
	const {
		isLoading,
		error,
		data,
		refetch,
	}: UseQueryResult<AxiosResponse<T>, AxiosError> = useQuery('test', query);

	const Wrapper = ({ children }) => {
		if (isLoading) return <Loading />;

		if (error) return <ErrorPpok variant='small' />;

		return <>{children}</>;
	};

	const result = data?.data;

	return { Wrapper, data: result, refetch };
}
