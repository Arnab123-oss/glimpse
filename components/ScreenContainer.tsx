import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";

interface ScreenContainerProps {
  component: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ component }) => {
  return <View style={styles.container}>{component}</View>;
};
const theme = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    width: Dimensions.get("window").width,
  },
});

export default ScreenContainer;
