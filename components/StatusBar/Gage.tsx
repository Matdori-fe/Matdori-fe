'use client';

import { styled } from 'styled-components';

const StyledGage = styled.div<{ score: number }>`
	width: ${({ score }) => score * 12}px;
`;

export default function Gage({ score }: { score: number | string }) {
	return (
		<StyledGage
			score={parseInt(score.toString())}
			className='absolute h-[4px] bg-80 rounded-basic'
		/>
	);
}
