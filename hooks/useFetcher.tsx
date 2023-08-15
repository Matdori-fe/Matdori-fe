import { useQuery } from 'react-query';

export const useFetcher = ({ query, children }) => {
	const { isLoading, error, data } = useQuery('test', query);

	if (isLoading) return <div>loading...</div>;

	if (error) return <div>error</div>;

	return children;
};
