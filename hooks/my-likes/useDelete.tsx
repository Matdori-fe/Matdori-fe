import { deleteAtom, deleteItemAtom, deleteListAtom } from '@/atoms/delete';
import Checked from '@/components/Checked/Checked';
import DeleteButton, {
	DeleteButtonPosition,
} from '@/components/DeleteButton/DeleteButton';
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDeleteList } from './useDeleteList';

interface IDeleteLikeJokbo {
	userIndex: number;
	favoriteJokboIndex: number;
}

// const deleteLikeJokbo = async ({
// 	userIndex,
// 	favoriteJokboIndex,
// }: IDeleteLikeJokbo) => {
// 	return await axios.delete(
// 		`${process.env.NEXT_PUBLIC_API}/users/${userIndex}/favorite-jokbos/${favoriteJokboIndex}`,
// 		{
// 			withCredentials: true,
// 		}
// 	);
// };

export const useDeleteLikeJokbo = ({
	userIndex,
	favoriteJokboIndex,
}: IDeleteLikeJokbo) => {
	return useMutation(() => deleteLikeJokbo({ userIndex, favoriteJokboIndex }));
};

export const useDeleteLikeShop = () => {};

export const de = async (favoriteStoreId) => {
	return await axios.delete(
		`${process.env.NEXT_PUBLIC_API}/users/143/favorite-stores/${favoriteStoreId}`,
		{
			withCredentials: true,
		}
	);
};

export const useDe = () => {
	return useMutation(de);
};

// ------------------------------------------

export const getUserIndex = () =>
	JSON.parse(localStorage.getItem('recoil-persist')).user.userId;

export const deleteLikeShop = async (favoriteStoreIndex: number) => {
	return await axios.delete(
		`${
			process.env.NEXT_PUBLIC_API
		}/users/${getUserIndex()}/favorite-stores/${favoriteStoreIndex}`,
		{
			withCredentials: true,
		}
	);
};

export const deleteLikeJokbo = async (favoriteJokboIndex: number) => {
	return await axios.delete(
		`${
			process.env.NEXT_PUBLIC_API
		}/users/${getUserIndex()}/favorite-jokbos/${favoriteJokboIndex}`,
		{
			withCredentials: true,
		}
	);
};

// REFACTOR: 함수가 길다. 2개의 id가 필요할때는 어떻게?
export const useDelete = ({ query, queryKey }) => {
	const queryClient = useQueryClient();

	// onSuccess와 쿼리 실행을 위한 로직
	const { isLoading, error, data, mutate } = useMutation<
		any,
		any,
		{ itemId: number; secondId: number }
	>(({ itemId, secondId }) => query(itemId, secondId), {
		onSuccess: () => queryClient.invalidateQueries(queryKey),
	});

	// onClick action을 위한 ui
	const DeletableItemWrapper = ({
		children,
		itemId,
		secondId,
		deleteBtnPosition,
	}: {
		children: React.ReactNode;
		itemId: number;
		secondId: number;
		deleteBtnPosition: DeleteButtonPosition;
	}) => {
		const deleteMode = useRecoilValue(deleteAtom);
		const [checked, setChecked] = useRecoilState<boolean>(
			deleteItemAtom(`deleteItemAtom/${itemId}`)
		);
		const { pushItem, deleteItem } = useDeleteList();

		return (
			<div
				className='relative w-full h-full'
				onClick={
					deleteMode
						? (e) => {
								if (!checked) {
									pushItem(itemId, secondId);
									setChecked(!checked);
									e.preventDefault();
								} else {
									console.log('de');
									deleteItem(itemId, secondId);
									setChecked(!checked);
									e.preventDefault();
								}
						  }
						: null
				}
			>
				{checked && <Checked />}
				{children}
			</div>
		);
	};

	return DeletableItemWrapper;
};
