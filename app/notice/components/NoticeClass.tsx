'use client';
import Toast from '@/components/Toast/Toast';
//공지사항 API를 불러오고 뿌리는 역할을 하는 파일
import NoticeTitle from './NoticeTitle';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NoticeType } from '../Notice_Type/Notice_Type';
import EmptyNotice from './EmptyNotice';

const NoticeClass = () => {
	let [noticeArr, setNoticeArr] = useState<NoticeType[]>([]);

	const noticeCallFun = (): void => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API}/notice`)
			.then((response) => {
				setNoticeArr(response.data.result);
			})
			.catch((error) => {
				console.log(Toast('불러오는 실패하였습니다.'));
			});
	};

	useEffect(() => {
		noticeCallFun();
	}, []);

	return (
		<div className='mx-6'>
			{noticeArr.length === 0 ? (
				<>
					<EmptyNotice />
				</>
			) : (
				<>
					{noticeArr.map((element, i) => (
						<NoticeTitle
							key={i}
							noticeIndex={element.noticeIndex}
							title={element.title}
							contents={element.contents}
							createdAt={element.createdAt}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default NoticeClass;
