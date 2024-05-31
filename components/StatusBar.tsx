// StatusBar.tsx
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

type StatusBarProps = {
  totalStories: number;
  currentIndex: number;
  progress: number;
};



const StatusBar: React.FC<StatusBarProps> = ({ totalStories, currentIndex, progress }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalStories }).map((_, index) => (
        <View key={index} style={styles.barContainer}>
          <Animated.View
            style={[
              styles.bar,
              index < currentIndex && styles.filledBar,
              index === currentIndex && { width: `${progress * 100}%`, backgroundColor: '#fff' },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    zIndex: 10,
  },
  barContainer: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Background bar color
    marginHorizontal: 2,
    overflow: 'hidden',
    borderRadius:10
  },
  bar: {
    height: '100%',
    width: '0%', // Initial width for progress bars
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Same as background bar color
  },
  filledBar: {
    width: '100%',
    backgroundColor: '#fff', // Progress bar color for completed stories
  },
});

export default StatusBar;
