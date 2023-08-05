import JokboTitle from "./components/JokboTitle";
import JokboCountBox from "./components/JokboCountBox";
import DepartMentRecommened from "./components/DepartmentRecommend";

const Jokbo = () => {
  return (
    <div className="w-full px-[20px]">
      <JokboTitle />
      <JokboCountBox />
      <DepartMentRecommened />
    </div>
  );
};

export default Jokbo;
