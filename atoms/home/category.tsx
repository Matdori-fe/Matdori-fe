/**
 * 어떻게 기본 카테고리를 둘 것인지
 * 무엇이 선택되었는지 어떻게 저장할 것인지
 *
 */

import axios from 'axios';
import { atom, selector, selectorFamily } from 'recoil';

export const categoryListAtom = atom<string[]>({
	key: 'CategoryListAtom',
	default: [
		'한식',
		'중식',
		'일식',
		'디저트,커피',
		'치킨',
		'패스트푸드',
		'술집',
		'양식',
		'고기',
		'분식',
		'야식',
		'샐러드',
		'아시안',
		'밀키트',
		'기타',
	],
});

// export const selectedCategoryAtom = atom<string>({
// 	key: 'SelectedCategoryAtom',
// 	default: '',
// });

export const getShopListByCategory = selectorFamily({
	key: 'getShopListByCategory',
	get: (selectedCategory) => async () => {
		// 없어도 될 것 같다.
		if (selectedCategory === '') return;

		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API}/stores`,
				{
					params: {
						category: selectedCategory,
						pageCount: 1,
					},
				}
			);

			return response.data?.result;
		} catch (err) {
			// TODO: 에러 잡기
		}
	},
});

// export default async function Page({
//   params,
// }: {
//   params: { categorySlug: string };
// }) {
