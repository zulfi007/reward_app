import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface PointsCardProps {
  points: number;
  subtitle?: string;
}

export function PointsCard({ points, subtitle }: PointsCardProps) {
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Text variant="titleLarge">Total Points</Text>
        <Text variant="displaySmall" style={styles.points}>
          {points.toLocaleString()}
        </Text>
        {subtitle && (
          <Text variant="bodyMedium">{subtitle}</Text>
        )}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  points: {
    color: '#2196F3',
    marginVertical: 8,
  },
});
