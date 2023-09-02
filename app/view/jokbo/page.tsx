import JokboTitle from './components/JokboTitle';
import JokboCountBox from './components/JokboCountBox';
import DepartMentRecommened from './components/DepartmentRecommend';
import PopularJokbo from './components/PopularJokbo';
import MatdoriPick from './components/MatdoriPick';
import JokboManyReview from './components/JokboManyReview';
import BottomButton from './components/BottomButton';
import Header from '@/components/Header/Header';

const Jokbo = () => {
	return (
		<div className='w-full mb-[160px]'>
			<Header title='맛도리 족보' right='search' />
			<JokboCountBox />
			<DepartMentRecommened />
			<PopularJokbo />
			<MatdoriPick />
			<JokboManyReview />
			<BottomButton />
		</div>
	);
};

export default Jokbo;
