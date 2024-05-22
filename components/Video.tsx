
import { useRef, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {AVPlaybackStatus, Video} from "expo-av"



export default function VideoSample() {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
 
  const handleLoad =() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }
  const handleClick = () => {
    if (status) {
      if (status.isBuffering || status.isLoaded) { // Video is either buffering or loaded
        if (status.isPlaying) {
          videoRef.current?.pauseAsync();
        } else {
          videoRef.current?.playAsync();
        }
      } else {
        // Handle cases where video is not yet loaded (e.g., display a loading indicator)
      }
    }
  };
  return (
    <View style={styles.contentContainer} onTouchStart={handleClick}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{uri:  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
        onLoad={handleLoad}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.controlsContainer}>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
