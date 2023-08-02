'use client';

import { styled } from 'styled-components';

const StyledGage = styled.div<{ score: number }>`
	width: ${({ score }) => score * 12}px;
`;

export default function Gage({ score }: { score: number }) {
	return (
		<StyledGage
			score={score}
			className='absolute h-[4px] bg-100 rounded-basic'
		/>
	);
}
