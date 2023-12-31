'use client';

import { checkedItemAtom, deleteAtom, deleteListAtom } from '@/atoms/delete';
import Checked from '@/components/Checked/Checked';
import DeleteButton, {
	DeleteButtonPosition,
} from '@/components/DeleteButton/DeleteButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

// export const useDeleteLikeJokbo = ({
// 	userIndex,
// 	favoriteJokboIndex,
// }: IDeleteLikeJokbo) => {
// 	return useMutation(() => deleteLikeJokbo({ userIndex, favoriteJokboIndex }));
// };

export const useDeleteLikeShop = () => {};

export const de = async (favoriteStoreId: number) => {
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
	JSON.parse(localStorage.getItem('recoil-persist') || '').user.userId;

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
export const useDelete = ({
	query,
	queryKey,
}: {
	query: any;
	queryKey: any;
}) => {
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
	}: {
		children: React.ReactNode;
		itemId: number;
		secondId?: number;
	}) => {
		const deleteMode = useRecoilValue(deleteAtom);
		const [checked, setChecked] = useRecoilState<boolean>(
			checkedItemAtom(`checkedItemAtom/${itemId}`)
		);

		const { handleItem } = useDeleteList();

		useEffect(() => {
			if (!deleteMode) setChecked(false);
		}, [deleteMode]);

		const onClick = (e: any) => {
			if (deleteMode) {
				setChecked(!checked);
				handleItem(itemId, secondId);
				e.preventDefault();
			}
		};

		return (
			<div className='relative w-full h-full' onClick={onClick}>
				{checked && <Checked />}
				{children}
			</div>
		);
	};

	return DeletableItemWrapper;
};
