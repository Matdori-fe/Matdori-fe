import Text from '../Text/Text';
import Gage from './Gage';

interface StatusBarProps {
	cleanRating: number;
	flavorRating: number;
	underPricedRating: number;
	showScore?: boolean;
}

// FIXME: Refactoring
function NormalGage({
	name,
	score,
	showScore,
}: {
	name: string;
	score: number | string;
	showScore: boolean;
}) {
	return (
		<div className='flex justify-between gap-[12px]' key={name}>
			<Text size='xxs' color='darkGray' fontWeight='normal'>
				{name}
			</Text>
			<div className='flex items-center gap-[10px] '>
				<div className='w-[60px] h-[4px] bg-lightGray rounded-basic' />
				<Gage score={score} />
				{showScore && (
					<Text
						size='xxs'
						color='darkGray'
						fontWeight='medium'
						className='w-[16px] flex justify-center'
					>
						{score}
					</Text>
				)}
			</div>
		</div>
	);
}
// TODO: async를 함수 이름앞에 적어줘야 fetch할 수 있다.
// TODO: 이 점수를 서버에서 직접 가져오는게 될까?
export default function StatusBar({
	flavorRating,
	underPricedRating,
	cleanRating,
	showScore = true,
}: StatusBarProps) {
	return (
		<div className='h-[42px] w-max'>
			<NormalGage
				showScore={showScore}
				name='음식 맛'
				score={flavorRating.toFixed(1)}
			/>
			<NormalGage
				showScore={showScore}
				name='가성비'
				score={underPricedRating.toFixed(1)}
			/>
			<NormalGage
				showScore={showScore}
				name='청결'
				score={cleanRating.toFixed(1)}
			/>
		</div>
	);
}
// REFACTOR:

// export async function fetchData() {
// 	const res = await fetch(`${process.env.MATDORI_API}/stores/20/info-header`, {
// 		cache: 'no-store',
// 	});
// 	return res.json();
// }
