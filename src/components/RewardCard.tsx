import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { Reward } from '../models/Reward';

interface RewardCardProps {
  reward: Reward;
  userPoints: number;
  onRedeem: (rewardId: number) => void;
}

export function RewardCard({ reward, userPoints, onRedeem }: RewardCardProps) {
  const isRedeemable = userPoints >= reward.points;

  return (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Text style={styles.emoji}>{reward.image}</Text>
        <Text variant="titleLarge">{reward.title}</Text>
        <Text variant="bodyMedium" style={styles.description}>
          {reward.description}
        </Text>
        <Text variant="titleMedium" style={styles.points}>
          {reward.points} Points
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => onRedeem(reward.id)}
          disabled={!isRedeemable}
        >
          {isRedeemable ? 'Redeem' : 'Not Enough Points'}
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  emoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  description: {
    marginVertical: 8,
    color: '#666',
  },
  points: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
