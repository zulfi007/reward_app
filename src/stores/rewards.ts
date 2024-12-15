import { atom } from 'jotai';
import { Reward } from '../models/Reward';

export const rewardsAtom = atom<Reward[]>([]);
export const rewardsLoadingAtom = atom(false);
