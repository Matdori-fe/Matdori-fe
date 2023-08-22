'use client';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import Text from '@/components/Text/Text';

const FilledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: '#FFD600', // 별이 채워질 때의 색상
  fontSize: '18px', // 별 아이콘의 크기를 조절 (원하는 크기로 변경)
}));

const UnFilledStarIcon = styled(StarIcon)(({ theme }) => ({
  fontSize: '18px', // 별 아이콘의 크기를 조절 (원하는 크기로 변경)
}));

const ChoiceStarScore = () => {
  const [value, setValue] = useState<number | null>(0);
  0;

  return (
    <>
      <Text fontWeight="medium" size="xs" color="darkGray">
        음식점 맛 {value?.toFixed(1)}
      </Text>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={0.1}
        icon={<FilledStarIcon />}
        emptyIcon={<UnFilledStarIcon />}
      />
    </>
  );
};
export default ChoiceStarScore;
