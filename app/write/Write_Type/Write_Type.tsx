export type Write_Type = {
  flavorRating: number;
  underPricedRating: number;
  cleanRating: number;
  storeIndex: number | null;
  title: string;
  contents: string;
  images: string[];
};

export type StoreIndex = {
  storeIndex: number | null;
};

export type StoreInfoHeader = {
  name: string;
  totalRating: number;
  flavorRating: number;
  underPricedRating: number;
  cleanRating: number;
  imgUrl: string;
};

// set함수 타입 (useState)
export type ChoiceStarScoreProps = {
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
  score: number | null;
  kind: ScoreKind;
};

export type ScoreKind = 'flavorRating' | 'underPricedRating' | 'cleanRating';

// 족보 쓰기 위한 in 타입 => 족보 제목, 족보 내용 setState를 받기 위한 타입.
export type WriteJokboProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export type WriteImageProps = {
  key: number;
  src: string;
  alt: string;
  onClick: () => void;
};

// 이미지를 받기위한 useState함수
export type ImageArrType = {
  setImageArr: React.Dispatch<React.SetStateAction<any[] | null>>;
};
