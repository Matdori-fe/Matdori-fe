import { atom } from "recoil";

export const TimerAtom = atom<number>({
  key: "TimerAtom",
  default: 5,
});
