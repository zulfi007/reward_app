import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  REWARDS: '@rewards',
};

export const storageService = {
  setAuthToken: async (token: string) => {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  getAuthToken: async () => {
    return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  removeAuthToken: async () => {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  setUserData: async (userData: any) => {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  },

  getUserData: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  },

  setRewards: async (rewards: any[]) => {
    await AsyncStorage.setItem(STORAGE_KEYS.REWARDS, JSON.stringify(rewards));
  },

  getRewards: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.REWARDS);
    return data ? JSON.parse(data) : [];
  },

  clearAll: async () => {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
  },
};
