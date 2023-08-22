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
