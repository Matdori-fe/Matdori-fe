'use client';
import Header from '@/components/Header/Header';
import { qnaArr } from '../database/QnaDataBase';
import { RiQuestionLine } from 'react-icons/ri';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
const QnaDetail = ({ params }: { params: { qnaIndex: number } }) => {
  const selectedQna = qnaArr[params.qnaIndex];

  return (
    <>
      <Header left="back" right="roundButton" title="FAQ" />
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
        href="tel:02-1234-1234"
        label="고객센터 상담하기"
        onClick={() => {}}
        variant="active"
      />
    </>
  );
};
export default QnaDetail;
