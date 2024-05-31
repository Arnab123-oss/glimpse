import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { AVPlaybackStatus, Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

type VideoSampleProps = {
  videoUrl: string;
};
 const VideoSample: React.FC<VideoSampleProps> = ({ videoUrl }) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

  const handleLoad = () => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  };

  const handleClick = () => {
    if (status && status.isLoaded) { // Ensure the status is loaded
      if (status.isPlaying) {
        videoRef.current?.pauseAsync();
      } else {
        videoRef.current?.playAsync();
      }
    } else {
      // Handle cases where video is not yet loaded (e.g., display a loading indicator)
      console.log('Video is not yet loaded');
    }
  };

  return (
    <View style={styles.contentContainer} onTouchStart={handleClick}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: videoUrl }}
        onLoad={handleLoad}
        onPlaybackStatusUpdate={status => setStatus(status)}
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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: width,
    height: (width * 9) / 16
   
  },
  controlsContainer: {
    padding: 10,
  },
});


export default VideoSample;