import JokboTitle from "./components/JokboTitle";
import JokboCountBox from "./components/JokboCountBox";
import DepartMentRecommened from "./components/DepartmentRecommend";
import PopularJokbo from "./components/PopularJokbo";
import MatdoriPick from "./components/MatdoriPick";
import { Skeleton } from "antd";

const Jokbo = () => {
  return (
    <div className="w-full px-[20px] h-[2000px]">
      <JokboTitle />
      <JokboCountBox />
      <DepartMentRecommened />
      <MatdoriPick />
      <PopularJokbo />
    </div>
  );
};

export default Jokbo;
