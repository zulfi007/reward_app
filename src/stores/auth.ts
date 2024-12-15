import { atom } from 'jotai';
import { User } from '../models/User';

export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom(false);
export const authLoadingAtom = atom(false);
