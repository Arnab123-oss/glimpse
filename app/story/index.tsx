//hieloe
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import VideoSample from "../../components/Video";
const { width } = Dimensions.get("window");

interface MediaItem {
  type: string;
  url: string;
}

interface Story {
  username: string;
  avatar: string;
  media: MediaItem[];
}

interface StoryCardProps {
  // story: Story;
}



const StoryCarousel: React.FC<StoryCardProps> = ({  }) => {
  // console.warn(story)
  const story =  {
      username: "user1",
      avatar: "https://example.com/avatar1.jpg",
      media: [
        { type: "image", url: "https://images.unsplash.com/photo-1716319487101-108ceed67fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
        { type: "video", url: "https://example.com/video1.mp4" },
      ],
    }
  const preview = story.media[0];
   // Show the first media item as the preview

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: story.avatar }} style={styles.avatar} />
      <Text style={styles.username}>{story.username}</Text>
      {preview.type === "image" ? (
        <Image source={{ uri: preview.url }} style={styles.media} />
      ) : (
        <VideoSample
          videoUrl={preview.url}
        />
      )}
    </TouchableOpacity>
    // <Text>fuck</Text>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#d81b60",
    marginBottom: 5,
  },
  username: {
    fontSize: 12,
    color: "#222",
  },
  media: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
});


export default StoryCarousel
