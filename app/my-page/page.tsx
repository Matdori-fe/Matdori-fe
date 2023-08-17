'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function MyPage() {
	// const [data, setData] = useState([]);

	const { isLoading, error, data } = useBestShop();
	// console.log(data?.data.result);

	const [response, TestFetcher] = useFetcher(useBestShop);

	return (
		<div>
			<TestFetcher>
				<div>hi</div>
			</TestFetcher>
		</div>
	);
}

const useBestShop = () => {
	const data = useQuery('best', () =>
		axios.get(`${process.env.NEXT_PUBLIC_API}/stores/best`)
	);

	return data;
};

const useFetcher = (query) => {
	const { isLoading, error, data } = query();

	const fetcher = ({ children }: { children: React.ReactNode }) => {
		if (isLoading) return <>loading</>;
		if (error) return <>error</>;
		return children;
	};

	return [data, fetcher];
};
