'use client';
// 공지사항을 눌렀을때 보여줄 공지사항 상세 컴포넌트
import { NoticeIndexType } from '../Notice_Type/Notice_Type';
import { useState, useEffect } from 'react';
import { NoticeType } from '../Notice_Type/Notice_Type';
import axios from 'axios';
import Toast from '@/components/Toast/Toast';
import Header from '@/components/Header/Header';

const NoticeDetail = ({ noticeIndex }: NoticeIndexType) => {
  let [noticeInfo, setNoticeInfo] = useState<NoticeType>({
    noticeIndex: 0,
    title: '공지사항을 불러오는 중입니다.',
    contents: '',
    createdAt: '',
  });

  //상세 공지사항 콜 함수
  const noticeCallFun = (): void => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/notice/${noticeIndex}`)
      .then((response) => {
        setNoticeInfo(response.data.result);
      })
      .catch((error) => {
        console.log(error);
        console.log(Toast('불러오는 실패하였습니다.'));
      });
  };

  useEffect(() => {
    noticeCallFun();
  }, []);

  return (
    <>
      <Header left="back" right="roundButton" title="공지사항" />
      <div className="font-Bold text-[18px] color-black">
        {noticeInfo.title}
      </div>
      <div className="mt-5 font-Regular text-[12px] text-darkGray">
        {noticeInfo.contents}
      </div>
    </>
  );
};
export default NoticeDetail;
