import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { AVPlaybackStatus, Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

type VideoSampleProps = {
  videoUrl: string;
  onLoad: (status: AVPlaybackStatus) => void;
};

const VideoSample: React.FC<VideoSampleProps> = ({ videoUrl, onLoad }) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const handleLoad = (status: AVPlaybackStatus) => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
    onLoad(status);
  };

  const handleClick = () => {
    if (status && status.isLoaded) {
      if (status.isPlaying) {
        videoRef.current?.pauseAsync();
      } else {
        videoRef.current?.playAsync();
      }
    } else {
      console.log('Video is not yet loaded');
    }
  };

  return (
    <View style={styles.contentContainer} onTouchStart={handleClick}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: videoUrl }}
        onLoad={(status) => handleLoad(status)}
        onPlaybackStatusUpdate={(status) => setStatus(status)}
        resizeMode="contain"
      />
      <View style={styles.controlsContainer}>
        {/* Add your controls here if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: width,
    height: height,
  },
  controlsContainer: {
    // Add styling if needed
  },
});

export default VideoSample;
