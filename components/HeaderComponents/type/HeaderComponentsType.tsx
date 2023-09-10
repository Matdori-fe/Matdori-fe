export type StoreShareType = {
  storeIndex: number | undefined;
  imgUrl: string | undefined;
  storeName: string | undefined;
  storeContent: string | undefined;
};

export type JokboShareType = {
  jokboIndex: number | undefined;
  nickName: string | undefined;
  imageUrl: string[] | undefined[] | undefined;
  jokboTitle: string | undefined;
  storeName: string | undefined;
};

export type DeleteKindType = {
  kind: 'comment' | 'jokbo' | undefined;
};

export type DeleteType = {
  id: number | undefined;
  kind: 'comment' | 'jokbo' | undefined;
};
