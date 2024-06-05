import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { AVPlaybackStatus, Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

type VideoSampleProps = {
  videoUrl: string;
  onLoad: (status: AVPlaybackStatus) => void;
  videoRef: React.RefObject<Video>;
};

const VideoSample: React.FC<VideoSampleProps> = ({ videoUrl, onLoad , videoRef }) => {
  // const videoRef = useRef<Video>(null);
  
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const handleLoad = (status: AVPlaybackStatus) => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
    onLoad(status);
  };

  return (
    <View style={styles.contentContainer}>
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
