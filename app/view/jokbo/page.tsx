import JokboTitle from "./components/JokboTitle";
import JokboCountBox from "./components/JokboCountBox";
import DepartMentRecommened from "./components/DepartmentRecommend";
import PopularJokbo from "./components/PopularJokbo";
import MatdoriPick from "./components/MatdoriPick";
import JokboManyReview from "./components/StoreCompoents/JokboManyReview";
import Button from "@/components/Button/Button";

const Jokbo = () => {
  return (
    <div className="w-full px-[20px] mb-[200px]">
      <JokboTitle />
      <JokboCountBox />
      <DepartMentRecommened />
      <PopularJokbo />
      <MatdoriPick />
      <JokboManyReview />

      <Button label="나만의 족보 작성하기" variant="active" modal={false} />
    </div>
  );
};

export default Jokbo;
