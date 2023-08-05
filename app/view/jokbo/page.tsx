import JokboTitle from "./components/JokboTitle";
import JokboCountBox from "./components/JokboCountBox";
import DepartMentRecommened from "./components/DepartmentRecommend";
import PopularJokbo from "./components/PopularJokbo";

const Jokbo = () => {
  return (
    <div className="w-full px-[20px]">
      <JokboTitle />
      <JokboCountBox />
      <DepartMentRecommened />
      <PopularJokbo />
    </div>
  );
};

export default Jokbo;
