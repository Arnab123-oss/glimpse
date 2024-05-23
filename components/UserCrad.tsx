import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

interface CardProps {
  name: string;
  age: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, age, imageUrl }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      width: Dimensions.get("window").width / 2.2,
      height: Dimensions.get("window").width / 1.4,
      margin: 10,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
      //   borderColor:theme.colors.primary,
      //   borderWidth:1
    },
    image: {
      width: "100%",
      height: "100%",
    },
    infoContainer: {
      position: "absolute",
      // bottom: 10,
      top: 10,
      left: 10,
      right: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    name: {
      fontWeight: "bold",
      color: "white",
      fontSize: 18,
    },
    likeIcon: {
      padding: 5,
    },
  });
  const[isLike,SetIsLike] = useState<boolean| null>(false)
  const handlePress = (name: string) => {
    Alert.alert("Single Tap", `You tapped on ${name}`);
  };

  const handleDoubleTap = (name: string) => {
    SetIsLike(true);
  };
  const lastTap = useRef<number | null>(null);
  const singleTapTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleTap = () => {
    const now = Date.now();

    if (lastTap.current && now - lastTap.current < 300) {
      // Detected double tap
      if (singleTapTimeout.current) {
        clearTimeout(singleTapTimeout.current);
      }
      handleDoubleTap("D");
    } else {
      // Detected single tap
      lastTap.current = now;
      singleTapTimeout.current = setTimeout(() => {
        handlePress("S");
      }, 300); // Delay to differentiate single tap from double tap
    }
  };

  return (
    <TouchableOpacity onPress={handleTap} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {name},{age}
          </Text>
          {isLike ? (
            <FontAwesome
              name="heart"
              size={20}
              color="red"
              style={styles.likeIcon}
            />
          ) : (
            <FontAwesome
              name="heart"
              size={20}
              color="white"
              style={styles.likeIcon}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
