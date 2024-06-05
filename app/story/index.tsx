// Storyline.tsx
import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Video } from "expo-av";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import VideoSample from "@/components/Video";
import usersStories from "../../constants/stories";
import { SafeAreaView } from "react-native-safe-area-context";

// import StatusBar from '@/components/StatusBar';

type Story = {
  id: string;
  type: "image" | "video";
  url: string;
};

// type RootStackParamList = {
//   Storyline: { storyId: string };
// };

// type StorylineRouteProp = RouteProp<RootStackParamList, 'Storyline'>;

const Storyfeed: React.FC = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = usersStories[userIndex];
  const story = user.stories[storyIndex];

  const goToNextUser = () => {
    setUserIndex((index) => {
      if (index === user.stories.length) {
        return 0;
      }

      return index + 1;
    });
  };

  const goToPrevUser = () => {
    setUserIndex((index) => {
      if (index === 0) {
        return 0;
      }

      return index - 1;
    });
  };

  const goToPrevStory = () => {
    setStoryIndex((index) => {
      if (index === 0) {
        goToPrevUser();
        return 0;
      }
      return index - 1;
    });
  };

  const goToNextStory = () => {
    setStoryIndex((index) => {
      if (index === user.stories.length - 1) {
        goToNextUser();
        return 0;
      }
      return index + 1;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storyContainer}>
        <Image source={{ uri: story.uri }} style={styles.image} />

        <Pressable style={styles.navPressable} onPress={goToPrevStory} />
        <Pressable
          style={[styles.navPressable, { right: 0 }]}
          onPress={goToNextStory}
        />

        <View style={styles.header}>
          <View style={styles.indicatorRow}>
              <View style={styles.indicator}></View>
              <View style={styles.indicator}></View>
              <View style={styles.indicator}></View>
          </View>
          <Text style={styles.username}>{user.username}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={styles.footer}>
            <Text></Text>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  storyContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingTop:5
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    width: "90%",
    // height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 15,
    borderRadius: 50,
  },
  navPressable: {
    position: "absolute",
    // backgroundColor: "red",
    width: "30%",
    height: "80%",
  },
  indicatorRow:{
       gap: 5,
       flexDirection:"row",
       marginBottom:20
  },
  indicator:{
    flex:1,
    height:5,
    backgroundColor:"grey"
  }
});

export default Storyfeed;
