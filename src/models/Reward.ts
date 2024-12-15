export interface Reward {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly points: number;
  readonly image: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly isActive: boolean;
}

export type RewardStatus = 'pending' | 'completed' | 'cancelled';

export interface RewardRedemption {
  readonly id: string;
  readonly userId: string;
  readonly rewardId: number;
  readonly redeemedAt: Date;
  readonly status: RewardStatus;
  readonly points: number;
}
