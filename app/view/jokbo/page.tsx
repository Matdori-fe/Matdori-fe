import JokboTitle from "./components/JokboTitle";
import JokboCountBox from "./components/JokboCountBox";
import DepartMentRecommened from "./components/DepartmentRecommend";
import PopularJokbo from "./components/PopularJokbo";
import MatdoriPick from "./components/MatdoriPick";
import JokboManyReview from "./components/JokboManyReview";
import BottomButton from "./components/BottomButton";
const Jokbo = () => {
  return (
    <div className="w-full px-[20px] mb-[160px]">
      <JokboTitle />
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
