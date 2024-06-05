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
import { useNavigation, useRouter } from "expo-router";

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
    viewCount: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
     
    }
  });

  const router = useRouter();
  const navigate = useNavigation();

  const handlePress = () => {
    router.push({
      pathname: '/story',
      params: { name: 'ankit' },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {name}
          </Text>
          <View style={styles.viewCount}>
          <FontAwesome
              name="eye"
              size={15}
              color="white"
              style={styles.likeIcon}
            />
           <Text style={{color:"white",fontWeight:"bold"}}>4.5K</Text>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
