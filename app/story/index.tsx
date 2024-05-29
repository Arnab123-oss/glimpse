// Storyline.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Alert } from 'react-native';
import { Video } from 'expo-av';
import { RouteProp, useRoute } from '@react-navigation/native';
import VideoSample from '@/components/Video';
import { useRouter } from 'expo-router';

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
    { id: '2', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
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

    const onVideoEnd = () => {
      nextStory();
    };
    // if(currentIndex === 0) onEndOfAllMedia();
    if (currentStory.type === 'image') {
      timeout = setTimeout(nextStory, 1000); // 10 seconds for images
    } else if (currentStory.type === 'video') {
      // Add event listener for video end
        timeout = setTimeout(onVideoEnd,1000); // Max 30 seconds for videos
    }

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or index change
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

  const onEndOfAllMedia = () => {
    // Trigger handler function when all media of an element are viewed
    // Keep this empty as per the requirement
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