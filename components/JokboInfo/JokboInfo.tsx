import {
	RiBookmarkFill,
	RiStarFill,
	RiHeartFill,
	RiChat3Fill,
} from 'react-icons/ri';

// 사용방법=> 필수 Input= kind(icon어떤거 할지 => iconKind중에서 고르기), count => 점수, 필요 시: 아이콘+점수를 감싸고 있는 Div태그의 추가 CSS
// ex) <JokboInfo kind="bookMark" count={35}/>

type iconKind = 'bookMark' | 'starScore' | 'heartScore' | 'chatScore';
type Size = 'small' | 'large';

type JokboInfoType = {
	kind: iconKind;
	count: number;
	className?: string;
	size?: 'small' | 'large';
};

const JokboInfo: React.FC<JokboInfoType> = ({
	kind,
	count,
	className,
	size = 'large',
}) => {
	function iconCollector(kind: iconKind) {
		if (kind === 'bookMark') {
			return (
				<>
					<RiBookmarkFill
						className={
							size === 'small'
								? 'w-[10px] h-[10px] mr-[1px]'
								: 'w-[12px] h-[12px] mr-[1px]'
						}
						color='54A3FF'
					/>
					{parseInt(count.toString()) < 10000 ? (
						<p className='font-Regular text-[12px] mt-[2px] ml-[1px] text-darkGray'>
							{count}
						</p>
					) : (
						<p className='font-Regular text-[12px] mt-[2px] ml-[1px] text-darkGray'>
							9999+
						</p>
					)}
				</>
			);
		} else if (kind === 'starScore') {
			return (
				<>
					<RiStarFill className='w-[12px] h-[12px]' color='FFD600' />
					<p className='font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]'>
						{count.toFixed(1)}
					</p>
				</>
			);
		} else if (kind === 'heartScore') {
			return (
				<>
					<RiHeartFill className='w-[12px] h-[12px] text-100' />
					<p className='font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]'>
						{count}
					</p>
				</>
			);
		} else if (kind === 'chatScore') {
			return (
				<>
					<RiChat3Fill className='w-[12px] h-[12px]' color='54A3FF' />
					<p className='font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]'>
						{count}
					</p>
				</>
			);
		}
	}

	return (
		<>
			{/*bookMark 컴포넌트*/}
			<div className={`flex items-center ${className}`}>
				{iconCollector(kind)}
			</div>
		</>
	);
};

export default JokboInfo;
