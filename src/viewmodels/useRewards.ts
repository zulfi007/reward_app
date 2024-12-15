import { useRewardStore } from '../stores/useRewardStore';
import { rewardService } from '../services/api';
import { storageService } from '../services/storage';

export function useRewards() {
  const { rewards, redemptions, isLoading, setRewards, addRedemption, setLoading } = useRewardStore();

  const fetchRewards = async () => {
    try {
      setLoading(true);
      const rewardsData = await rewardService.getRewards();
      setRewards(rewardsData);
      await storageService.setRewards(rewardsData);
    } catch (error) {
      console.error('Fetch rewards error:', error);
      // Try to load from cache
      const cachedRewards = await storageService.getRewards();
      if (cachedRewards.length > 0) {
        setRewards(cachedRewards);
      }
    } finally {
      setLoading(false);
    }
  };

  const redeemReward = async (rewardId: number) => {
    try {
      setLoading(true);
      const redemption = await rewardService.redeemReward(rewardId);
      addRedemption(redemption);
      await fetchRewards(); // Refresh rewards list after redemption
      return redemption;
    } catch (error) {
      console.error('Redeem reward error:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    rewards,
    redemptions,
    isLoading,
    fetchRewards,
    redeemReward,
  };
}
