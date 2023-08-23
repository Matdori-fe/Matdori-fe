'use client';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import Text from '@/components/Text/Text';
import { ChoiceStarScoreProps } from '../Write_Type/Write_Type';

const FilledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: '#FFD600', // 별이 채워질 때의 색상
  fontSize: '20px', // 별 아이콘의 크기를 조절 (원하는 크기로 변경)
}));

const UnFilledStarIcon = styled(StarIcon)(({ theme }) => ({
  fontSize: '20px', // 별 아이콘의 크기를 조절 (원하는 크기로 변경)
}));

const ChoiceStarScore: React.FC<ChoiceStarScoreProps> = ({
  score,
  setScore,
  kind,
}) => {
  let kindName = '';
  if (kind === 'flavorRating') kindName = '음식 맛';
  if (kind === 'underPricedRating') kindName = '가성비';
  if (kind === 'cleanRating') kindName = '청결';

  return (
    <div className="w-4/12 justify-center flex flex-wrap min-w-[104px] mb-4">
      <div className="w-full justify-center text-center flex flex-nowrap">
        <Text fontWeight="medium" size="xs" color="darkGray">
          {kindName}
        </Text>
        <div className="w-1" />
        <Text fontWeight="medium" size="xs" color="darkGray">
          {score === null ? '0.0' : score.toFixed(1)}
        </Text>
      </div>
      <Rating
        className="mt-[6px]"
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
        precision={0.1}
        icon={<FilledStarIcon />}
        emptyIcon={<UnFilledStarIcon />}
      />
    </div>
  );
};
export default ChoiceStarScore;
