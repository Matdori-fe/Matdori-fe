// import { styled } from 'styled-components';

import Text from '../Text/Text';
import Gage from './Gage';

// const Gage = styled.div<{
// 	listLength: number;
// 	layoutId: string;
// 	className: string;
// }>`
// 	@media (min-width: 412px) {
// 		width: calc(412px / ${({ listLength }) => listLength});
// 	}
// `;

interface StatusBarProps {
	cleanRating: number;
	flavorRating: number;
	underPricedRating: number;
}

// TODO: 이 점수를 서버에서 직접 가져오는게 될까?
export default async function StatusBar({
	flavorRating,
	underPricedRating,
	cleanRating,
}: StatusBarProps) {
	const testRatingList = ['음식 맛', '가성비', '청결'];

	// TODO: test 데이터 다 지우기
	const testNumber = [1.1, 2.2, 4.4];
	// const testData = await fetchData();

	return (
		<div className='w-[121px] h-[42px] border border-gray'>
			{testRatingList.map((name, i) => (
				<div className='flex justify-between' key={name}>
					<Text size='xxs' color='darkGray' fontWeight='normal'>
						{name}
					</Text>
					<div className='flex items-center gap-[10px] '>
						<div className='w-[60px] h-[4px] bg-lightGray rounded-basic' />
						<Gage score={testNumber[i]} />
						<Text
							size='xxs'
							color='darkGray'
							fontWeight='medium'
							className='w-[16px] flex justify-center'
						>
							{testNumber[i]}
						</Text>
					</div>
				</div>
			))}
		</div>
	);
}

// export async function fetchData() {
// 	const res = await fetch(`${process.env.MATDORI_API}/stores/20/info-header`, {
// 		cache: 'no-store',
// 	});
// 	return res.json();
// }
