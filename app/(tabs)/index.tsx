import {
  Image,
  StyleSheet,
  Platform,
  View,
  FlatList,
  ScrollViewComponent,
  ScrollView,
  Dimensions,
} from "react-native";

import { ThemedView } from "@/components/ThemedView";
import SearchBox from "@/components/SearchBox";
import { useTheme } from "react-native-paper";
import Card from "@/components/Card";
import VideoSample from "@/components/Video";

const posts = [
  {
    id: "1",
    username: "john_doe",
    avatar:
      "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3Daaaz",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    description: "Beautiful scenery!",
  },
  {
    id: "2",
    username: "jane_doe",
    avatar:
      "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "video",
        url: "https://www.pexels.com/video/a-book-and-a-flower-on-a-picnic-blanket-6800638/",
      },
    ],
    description: "Check out this cool video!",
  },
];

export default function HomeScreen() {
  const handleSearch = (text: string) => {
    // Handle the search logic here
    console.log("Search text:", text);
  };
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 8,
      marginTop: 60,
      // marginBottom: 10,
    },
    home: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    card: {
      // flex: 1,
      // padding: 10,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").width,
    },
    
  });

  return (
    <View style={styles.home}>
      <View style={styles.container}>
        <SearchBox onSearch={handleSearch} />
      </View>
       <VideoSample />



{/*       
      <View style={styles.card}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          {posts?.map((item, index) => (
            <Card
              key={index}
              username={item.username}
              avatar={item.avatar}
              media={item.media}
              description={item.description}
            />
          ))}
        </ScrollView>
      </View> */}
    </View>
  );
}
