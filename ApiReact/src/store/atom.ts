import { atom, createStore } from "jotai";

export const myStore = createStore();

export const commentAtom = atom('Hi skillbox');
export const commentAnswAtom = atom('');