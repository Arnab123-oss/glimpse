// Storyline.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import VideoSample from '@/components/Video';
import StatusBar from '@/components/StatusBar';

type Story = {
  id: string;
  type: 'image' | 'video';
  url: string;
};

type RootStackParamList = {
  Storyline: { storyId: string };
};

type StorylineRouteProp = RouteProp<RootStackParamList, 'Storyline'>;

const { width, height } = Dimensions.get('window');

const dummyData: { [key: string]: Story[] } = {
  '1': [
    { id: '1', type: 'image', url: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', type: 'video', url: 'https://videos.pexels.com/video-files/7565438/7565438-hd_1080_1920_25fps.mp4' },
    { id: '3', type: 'image', url: 'https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  '2': [
    { id: '4', type: 'image', url: 'https://via.placeholder.com/800x600.png?text=Story+2+Image+1' },
    { id: '5', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '6', type: 'image', url: 'https://via.placeholder.com/800x600.png?text=Story+2+Image+2' },
  ],
};

const Storyline: React.FC = () => {
  const route = useRoute<StorylineRouteProp>();
  const { storyId } = route.params;
  const [stories, setStories] = useState<Story[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<Video>(null);
  const router = useRouter();

  useEffect(() => {
    const storiesData = dummyData[1] || [];
    setStories(storiesData);
  }, [storyId]);

  useEffect(() => {
    if (stories.length === 0) return;

    let timeout: NodeJS.Timeout;
    const currentStory = stories[currentIndex];
    setProgress(0);

    if (currentStory.type === 'image') {
      timeout = setTimeout(nextStory, 10000); // 10 seconds for images
      // Simulate progress for images
      let progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 0.01;
          if (newProgress >= 1) {
            clearInterval(progressInterval);
          }
          return newProgress;
        });
      }, 100);
    } else if (currentStory.type === 'video') {
      // Simulate progress for videos
      timeout = setTimeout(nextStory, 10000); // Max 10 seconds for videos
      let progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 0.01;
          if (newProgress >= 1) {
            clearInterval(progressInterval);
          }
          return newProgress;
        });
      }, 100);
    }

    return () => clearTimeout(timeout); // Cleanup timeout onn umount or index change
  }, [currentIndex, stories]);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % stories.length;
      if (nextIndex === 0) {
        onEndOfAllMedia();
      }
      return nextIndex;
    });
  };

  const previousStory = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1;
      return prevIndexValue < 0 ? stories.length - 1 : prevIndexValue;
    });
  };

  const onEndOfAllMedia = () => {
    // Trigger handler function when all media of an element are viewed
    router.back();
  };

  const renderStoryContent = (story: Story) => {
    if (story.type === 'image') {
      return <Image source={{ uri: story.url }} style={styles.image} />;
    } else if (story.type === 'video') {
      return <VideoSample videoUrl={story.url} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar totalStories={stories.length} currentIndex={currentIndex} progress={progress} />
      <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.leftTouchable} onPress={previousStory} />
        <TouchableOpacity style={styles.rightTouchable} onPress={nextStory} />
      </View>
      {stories.length > 0 ? (
        renderStoryContent(stories[currentIndex])
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  touchableContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    zIndex: 1,
  },
  leftTouchable: {
    flex: 1,
  },
  rightTouchable: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  video: {
    width: width,
    height: height,
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Storyline;
