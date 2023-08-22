export const useFetcher = (query) => {
	const { isLoading, error, data, mutate } = query();

	const fetcher = ({ children }: { children: React.ReactNode }) => {
		if (isLoading) return <>{children}</>;
		if (error) return <p>error</p>;
		return <div onClick={mutate}>{children}</div>;
	};

	return [data, mutate, fetcher];
};
