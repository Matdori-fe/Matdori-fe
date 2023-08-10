'use client';

import ModalLayout from './ModalLayout';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useModal } from '@/hooks/useModal';
import { DepartmentAtom } from '@/app/status/DepartmentAtom';

// TODO: 선택된 과를 어디에 저장해서 사용할지 생각해야 한다. 선택된건 빨간색으로 표시하고 화면에도 띄울 것이기 때문임
export default function DepartmentModal() {
	const [departmentList, setDepartmentList] = useState([]);

	// 전공 받아오기
	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_API}/departments`).then((r) => {
			setDepartmentList(r.data.result);
		});
	}, []);

	const { closeModal } = useModal();
	const [department, setDepartment] = useRecoilState(DepartmentAtom);

	return (
		<ModalLayout
			title='정렬'
			onClose={() => closeModal('department')}
			variant='large'
		>
			{/* TODO: 여기 높이 바꿔야함 */}
			<ul className='flex-col w-full overflow-scroll h-[412px] scrollbar-hide'>
				{departmentList.map((name) => (
					<li
						key={name}
						className={`py-[16px]  ${name === department && 'text-100'}`}
						onClick={() => {
							setDepartment(name);
							closeModal('department');
						}}
					>
						{name}
					</li>
				))}
			</ul>
			<div className='w-full h-[10px] m-[30px]' />
		</ModalLayout>
	);
}

// FIXME: a 태그 속 a 구조가 문제같음.
