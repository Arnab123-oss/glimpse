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
import { ScreenContainer } from "react-native-screens";

import UserCard from "@/components/UserCrad";

const data = [
  {
    id: "1",
    name: "Maya",
    age: 29,
    imageUrl:
      "https://images.unsplash.com/photo-1550155888-430386a434b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "2",
    name: "Nancy",
    age: 25,
    imageUrl:
    "https://images.unsplash.com/photo-1716321952175-11aecece3462?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: "3",
    name: "Stacey",
    age: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1550155891-1ab2d265d9c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "4",
    name: "Kat",
    age: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1480618376353-2950ee462b17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D",
  },  {
    id: "4",
    name: "Kat",
    age: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "4",
    name: "Kat",
    age: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1592398276785-f636168c02e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJvbWFuY2V8ZW58MHx8MHx8fDA%3D",
  },
];

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
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
    ],
    description: "Beautiful scenery!",
  },
  {
    id: "2",
    username: "jane_do",
    avatar:
      "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
      // marginHorizontal: 8,
      marginTop: 60,
    },
    home: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    card: {
      flex: 1,
    },
    list: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const renderItem = ({ item }: { item: (typeof data)[0] }) => (
    <UserCard name={item.name} age={item.age} imageUrl={item.imageUrl} />
  );

  return (
    <View style={styles.home}>
      <View style={styles.container}>
        <SearchBox onSearch={handleSearch} />
      </View>
  

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
