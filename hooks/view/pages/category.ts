import axios from 'axios';

interface IShopListByCategory {
	pageParams: number;
	category: string;
}

export const useShopListByCategory = async ({
	pageParams = 1,
	category,
}: IShopListByCategory) => {
	try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/stores`, {
			params: {
				pageCount: 1,
				category: '한식',
			},
		});

		return response.data.result;
	} catch (err) {
		console.log(err);
	}
};
