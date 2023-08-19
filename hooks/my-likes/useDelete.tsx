import { deleteAtom } from '@/atoms/deleteAtom';
import DeleteButton from '@/components/DeleteButton/DeleteButton';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';

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

const getUserIndex = () =>
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

// REFACTOR: 함수가 길다.
export const useDelete = ({ query, queryKey }) => {
	const queryClient = useQueryClient();

	// onSuccess와 쿼리 실행을 위한 로직
	const { isLoading, error, data, mutate } = useMutation(
		(itemId: number) => query(itemId),
		{
			onSuccess: () => queryClient.invalidateQueries(queryKey),
		}
	);

	// onClick action을 위한 ui
	const DeletableItemWrapper = ({
		children,
		itemId,
	}: {
		children: React.ReactNode;
		itemId: number;
	}) => {
		const deleteState = useRecoilValue(deleteAtom);

		if (!deleteState) return <>{children}</>;

		return (
			<div className='relative'>
				<DeleteButton onClick={() => mutate(itemId)} />
				{children}
			</div>
		);
	};

	return DeletableItemWrapper;
};
