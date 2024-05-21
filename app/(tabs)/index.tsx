import { Image, StyleSheet, Platform } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import SearchBox from "@/components/SearchBox";

export default function HomeScreen() {
  const handleSearch = (text: string) => {
    // Handle the search logic here
    console.log("Search text:", text);
  };
  return (
    <ThemedView style={styles.Container}>
      <SearchBox onSearch={handleSearch} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
