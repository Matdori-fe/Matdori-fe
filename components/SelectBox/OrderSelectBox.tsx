import React from "react";

type InFunction = {
  onSelectChange: React.Dispatch<React.SetStateAction<string>>;
};

const OlderSelectBox = ({ onSelectChange }: InFunction) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value);
  };

  return (
    <select
      className="text-[12px] text-black font-Regular bg-white"
      onChange={handleSelectChange}
    >
      <option key="day" value="day" className="accent-slate-50">
        최신순
      </option>
      <option key="like" value="like" className="bg-white">
        좋아요순
      </option>
      <option key="review" value="review" className="bg-100">
        리뷰순
      </option>
    </select>
  );
};

export default OlderSelectBox;
