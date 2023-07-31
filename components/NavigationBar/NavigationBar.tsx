import {
	RiHome5Line,
	RiHome5Fill,
	RiSearch2Line,
	RiSearch2Fill,
	RiBook3Line,
	RiBook3Fill,
	RiUser2Line,
	RiUser2Fill,
} from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { NavigationAtom } from '@/app/status/NavigationAtom';

const NavigationBar: React.FC = () => {
	// 하단 바에 대한 state => true면 그 페이지로 이동
	// state = [홈, 검색, 족보, My] 에 대한 boolean 형태 배열
	const [navigationState, setNavigationState] = useRecoilState(NavigationAtom);

	const router = useRouter();

	//input: click한 컴포넌트의 번호 (배열의 인덱스 번호와 동일)
	function clickFun(clickComponent: number): void {
		let changeArr = new Array(4).fill(false);
		changeArr[clickComponent] = true;
		setNavigationState(changeArr);
		if (clickComponent === 0) {
			//router.push('/')
		} else if (clickComponent === 1) {
			//router.push('/search ')
		} else if (clickComponent === 2) {
			//router.push('/jokbo')
		} else if (clickComponent === 3) {
			//router.push('my-page')
		} else {
			//에러 페이지
			//router.push('/')
		}
	}

	return (
		<>
			<div className='w-full h-auto flex justify-around border-t border-lightgray pt-[10px] fixed bottom-5'>
				{/*홈 컴포넌트*/}
				<div
					className='w-[24px] h-[39px] flex flex-wrap justify-center items-center'
					onClick={() => clickFun(0)}
				>
					{navigationState[0] === true ? (
						<>
							<RiHome5Fill className='w-[24px] h-[24px] text-100' />
							<p className='font-Regular text-100'>홈</p>
						</>
					) : (
						<>
							<RiHome5Line className='w-[24px] h-[24px] text-darkgray' />
							<p className='font-Regular text-darkgray'>홈</p>
						</>
					)}
				</div>

				{/*검색 컴포넌트*/}
				<div
					className='w-[28px] h-[39px] flex flex-wrap justify-center items-center'
					onClick={() => clickFun(1)}
				>
					{navigationState[1] === true ? (
						<>
							<RiSearch2Fill className='w-[24px] h-[24px] text-100' />
							<p className='font-Regular text-100 whitespace-nowrap'>검색</p>
						</>
					) : (
						<>
							<RiSearch2Line className='w-[24px] h-[24px] text-darkgray' />
							<p className='font-Regular text-darkgray'>검색</p>
						</>
					)}
				</div>

				{/*족보 컴포넌트*/}
				<div
					className='w-[28px] h-[39px] flex flex-wrap justify-center items-center'
					onClick={() => clickFun(2)}
				>
					{navigationState[2] === true ? (
						<>
							<RiBook3Fill className='w-[24px] h-[24px] text-100' />
							<p className='font-Regular text-100'>족보</p>
						</>
					) : (
						<>
							<RiBook3Line className='w-[24px] h-[24px] text-darkgray' />
							<p className='font-Regular text-darkgray'>족보</p>
						</>
					)}
				</div>

				{/*My 컴포넌트*/}
				<div
					className='w-[24px] h-[39px] flex flex-wrap justify-center items-center'
					onClick={() => clickFun(3)}
				>
					{navigationState[3] === true ? (
						<>
							<RiUser2Fill className='w-[24px] h-[24px] text-100' />
							<p className='font-Regular text-100'>My</p>
						</>
					) : (
						<>
							<RiUser2Line className='w-[24px] h-[24px] text-darkgray' />
							<p className='font-Regular text-darkgray'>My</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
