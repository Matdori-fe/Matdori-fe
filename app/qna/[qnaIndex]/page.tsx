'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import { qnaArr } from '../database/QnaDataBase';
import { RiQuestionLine } from 'react-icons/ri';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';

const QnaDetail = ({ params }: { params: { qnaIndex: number } }) => {
  const selectedQna = qnaArr[params.qnaIndex];

  const handleContactSupport = () => {
    const emailAddress = 'inha_matdori@naver.com';
    const subject = 'Madtori 고객센터 상담하기';
    const body =
      '저희 맛도리를 이용해주셔서 정말 감사합니다. \n상담할 내용을 자세히 적어주시면 빠른 시일내에 답변 드리곘습니다.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header left="back" title="FAQ" />
      <div className="mx-5">
        <div className="flex mb-4">
          <RiQuestionLine className="text-80 text-[20px] mt-[5px] mr-2" />
          <div className="w-full">
            <Text fontWeight="bold" color="black" size="lg">
              {selectedQna.title}
            </Text>
          </div>
        </div>
        <div className="mx-1">
          <Text fontWeight="normal" color="darkGray" size="xs">
            {selectedQna.content}
          </Text>
        </div>
      </div>
      <Button
        onClick={handleContactSupport}
        label="고객센터 상담하기"
        variant="active"
      />
    </>
  );
};

export default QnaDetail;
