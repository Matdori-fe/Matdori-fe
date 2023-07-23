'use client'
import { atom } from "recoil";

export const NavigationAtom = atom<boolean[]>({
    key:'NavigationAtom',
    default:[false,false,false,false]
})