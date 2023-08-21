import { RiCloseFill } from 'react-icons/ri';

export type DeleteButtonPosition = 'shop' | 'jokbo' | 'comment';

interface IDeleteButton {
	onClick: () => void;
	deleteBtnPosition: DeleteButtonPosition;
}

const positionVariant = {
	shop: 'right-[6px] top-[6px]',
	jokbo: 'right-[7px] top-[23px]',
	comment: 'right-0 top-[16px]',
};

// REFACTOR: type
export default function DeleteButton({
	onClick,
	deleteBtnPosition = 'shop',
}: IDeleteButton) {
	return (
		<div
			onClick={onClick}
			className={`h-[20px] w-[20px] rounded-basic bg-white border-lightGray border flex justify-center items-center absolute ${positionVariant[deleteBtnPosition]}`}
		>
			<RiCloseFill size='10' />
		</div>
	);
}
