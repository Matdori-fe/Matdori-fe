'use client';
import { WriteJokboProps } from '../Write_Type/Write_Type';
import SmallTitle from '@/components/Title/SmallTitle';
import { useState } from 'react';

const WriteJokbo: React.FC<WriteJokboProps> = ({ setTitle, setContent }) => {
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  function titleInputHeight(event: React.ChangeEvent<HTMLInputElement>) {
    const element = event.target;

    setTitleValue(element.value);
    setTitle(element.value);
  }

  function contentInputHeight(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const element = event.target;
    element.style.height = '150px';
    element.style.height = Math.max(150, element.scrollHeight + 2) + 'px';
    setContentValue(element.value);
    setContent(element.value);
  }

  return (
    <>
      <SmallTitle className="w-full">족보 제목</SmallTitle>

      <input
        className="w-full border-[1px] border-lightGray rounded-basic pt-[8px] pl-3 pr-3 pb-2 text-[12px] font-Regular h-[36px] scrollbar-hide mt-3 mb-3"
        placeholder="제목을 작성해주세요."
        value={titleValue}
        onChange={titleInputHeight}
      />

      <SmallTitle className="w-full">족보 내용</SmallTitle>

      <textarea
        className="w-full border-[1px] border-lightGray rounded-basic p-[5.5px] pt-2 pl-3 pr-3 text-[12px] font-Regular h-[150px] mt-3"
        placeholder="내용을 작성해주세요."
        value={contentValue}
        onChange={contentInputHeight}
      />
    </>
  );
};

export default WriteJokbo;
