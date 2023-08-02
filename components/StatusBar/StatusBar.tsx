import Text from '../Text/Text';
import Gage from './Gage';

interface StatusBarProps {
	cleanRating: number;
	flavorRating: number;
	underPricedRating: number;
}

// FIXME: Refactoring
function NormalGage({ name, score }: { name: string; score: number }) {
	return (
		<div className='flex justify-between' key={name}>
			<Text size='xxs' color='darkGray' fontWeight='normal'>
				{name}
			</Text>
			<div className='flex items-center gap-[10px] '>
				<div className='w-[60px] h-[4px] bg-lightGray rounded-basic' />
				<Gage score={score} />
				<Text
					size='xxs'
					color='darkGray'
					fontWeight='medium'
					className='w-[16px] flex justify-center'
				>
					{score}
				</Text>
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
}: StatusBarProps) {
	return (
		<div className='w-[121px] h-[42px]'>
			<NormalGage name='음식 맛' score={flavorRating} />
			<NormalGage name='가성비' score={underPricedRating} />
			<NormalGage name='청결' score={cleanRating} />
		</div>
	);
}

// export async function fetchData() {
// 	const res = await fetch(`${process.env.MATDORI_API}/stores/20/info-header`, {
// 		cache: 'no-store',
// 	});
// 	return res.json();
// }
