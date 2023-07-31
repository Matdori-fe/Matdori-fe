"use client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "NavigationAtom",
  storage: sessionStorage,
});

export const NavigationAtom = atom<boolean[]>({
  key: "NavigationAtom",
  default: [false, false, false, false],
  effects_UNSTABLE: [persistAtom],
});
