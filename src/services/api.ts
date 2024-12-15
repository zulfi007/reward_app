import axios from 'axios';
import { User, UserCredentials } from '../models/User';
import { Reward, RewardRedemption } from '../models/Reward';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API URL
  timeout: 10000,
});

export const authService = {
  login: async (credentials: UserCredentials) => {
    // TODO: Implement actual API call
    return { token: 'dummy-token' };
  },
  logout: async () => {
    // TODO: Implement actual API call
    return true;
  },
};

export const userService = {
  getCurrentUser: async (): Promise<User> => {
    // TODO: Implement actual API call
    return {
      id: '1',
      name: 'John Carpenter',
      email: 'john.carpenter@example.com',
      phone: '+1 234 567 8900',
      location: 'San Francisco, CA',
      points: 1250,
    };
  },
  updateProfile: async (user: Partial<User>): Promise<User> => {
    // TODO: Implement actual API call
    return { ...await userService.getCurrentUser(), ...user };
  },
};

export const rewardService = {
  getRewards: async (): Promise<Reward[]> => {
    // TODO: Implement actual API call
    return [
      {
        id: 1,
        title: 'Tool Discount',
        description: '10% off on your next tool purchase',
        points: 500,
        image: '🛠️',
      },
      {
        id: 2,
        title: 'Premium Tool Set',
        description: 'Get a premium carpenter tool set',
        points: 1000,
        image: '🧰',
      },
    ];
  },
  redeemReward: async (rewardId: number): Promise<RewardRedemption> => {
    // TODO: Implement actual API call
    return {
      id: '1',
      userId: '1',
      rewardId,
      redeemedAt: new Date(),
      status: 'pending',
    };
  },
};
