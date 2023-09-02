import React from 'react'; // 반드시 React를 import해야 합니다.
import DayTimeText from './DayTimeText';
import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
type StoreTimeArr = {
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
	sunday: string;
};
type StoreTimeProps = {
	storeTimeArr: StoreTimeArr; // StoreTimeArr 타입을 사용
};

type Day =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'
	| 'sunday';

const daysOfWeek: Day[] = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
];

const StoreTime: React.FC<StoreTimeProps> = ({ storeTimeArr }) => {
	const [isDetail, setIsDetail] = useState(false);
	const detailBtnFun = () => {
		setIsDetail(!isDetail);
	};
	//오늘 날짜를 알기 위한 코드
	const today = new Date();
	const dayIndex = today.getDay();
	const todayDayOfWeek: Day = daysOfWeek[dayIndex];

	return (
		<div className='flex w-full' onClick={detailBtnFun}>
			<div className='flex flex-wrap w-auto w-full h-auto'>
				{isDetail ? (
					<>
						<div className='flex justify-between w-full'>
							<DayTimeText day='monday' time={storeTimeArr.monday} />
							<RiArrowUpSLine className='w-[16px] ml-1' />
						</div>
						<DayTimeText day='tuesday' time={storeTimeArr.tuesday} />
						<DayTimeText day='wednesday' time={storeTimeArr.wednesday} />
						<DayTimeText day='thursday' time={storeTimeArr.thursday} />
						<DayTimeText day='friday' time={storeTimeArr.friday} />
						<DayTimeText day='saturday' time={storeTimeArr.saturday} />
						<DayTimeText day='sunday' time={storeTimeArr.sunday} />
					</>
				) : (
					<>
						<div className='flex justify-between w-full'>
							<DayTimeText
								day={todayDayOfWeek}
								time={storeTimeArr[todayDayOfWeek]}
							/>
							<RiArrowDownSLine
								className='w-[16px] ml-1'
								onClick={detailBtnFun}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default StoreTime;
