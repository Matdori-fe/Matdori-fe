import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type UserInfo = {
  department: string;
  nickname: string;
  email: string;
  userId: number;
};

const { persistAtom } = recoilPersist();

export const UserAtom = atom<UserInfo>({
  key: 'user',
  default: { department: 'none', nickname: 'none', email: 'none', userId: 0 },
  effects_UNSTABLE: [persistAtom],
});
