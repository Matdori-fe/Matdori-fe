import axios from 'axios';

interface IShopListByCategory {
	pageParams: number;
	category: string;
}

export const getShopListByCategory = async ({
	pageParams = 1,
	category,
}: IShopListByCategory) => {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/stores`, {
			params: {
				category,
				pageCount: pageParams,
			},
		});

		const data = response;

		console.log(data);
	} catch (err) {
		console.log(err);
	}

	return 3;
};
