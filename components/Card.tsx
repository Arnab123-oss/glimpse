import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
// import Video from "react-native-video";

interface MediaItem {
  type: string;
  url: string;
}
interface CardProps {
  username: string;
  avatar: string;
  media: MediaItem[];
  description: string;
}

const Card: React.FC<CardProps> = ({
  username,
  avatar,
  media,
  description,
}) => {
  const renderMediaItem = ({ item }: { item: MediaItem }) => {
    return item.type === "image" ? (
      <Image source={{ uri: item.url }} style={styles.media} />
    ) : (
        <Image source={{ uri: item.url }} style={styles.media} />
    );
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Media */}
      <FlatList
        data={media}
        renderItem={renderMediaItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  media: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  footer: {
    padding: 10,
  },
  description: {
    marginTop: 5,
  },
});

export default Card;
