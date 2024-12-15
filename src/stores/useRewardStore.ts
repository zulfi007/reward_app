import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Reward, RewardRedemption } from '../models/Reward';

interface RewardState {
  rewards: Reward[];
  redemptions: RewardRedemption[];
  isLoading: boolean;
  setRewards: (rewards: Reward[]) => void;
  addRedemption: (redemption: RewardRedemption) => void;
  setLoading: (isLoading: boolean) => void;
  reset: () => void;
}

const initialState = {
  rewards: [],
  redemptions: [],
  isLoading: false,
};

export const useRewardStore = create<RewardState>()(
  immer((set) => ({
    ...initialState,
    setRewards: (rewards) =>
      set((state) => {
        state.rewards = rewards;
      }),
    addRedemption: (redemption) =>
      set((state) => {
        state.redemptions.push(redemption);
      }),
    setLoading: (isLoading) =>
      set((state) => {
        state.isLoading = isLoading;
      }),
    reset: () => set(initialState),
  }))
);
