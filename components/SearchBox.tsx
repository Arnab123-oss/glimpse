import React, { useState } from 'react';
import { StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // You may need to install expo-vector-icons for this
import { useTheme } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface SearchBoxProps {
  onSearch: (text: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const theme = useTheme()
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // You can perform any search-related logic here
    // For now, just passing the search text to the parent component
    onSearch(searchText);
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor: theme.colors.outline,
      borderRadius: 25,
      paddingHorizontal: 15,
      // marginHorizontal: 10,
      marginBottom: 10,
      backgroundColor:theme.colors.surfaceVariant
    },
    input: {
      flex: 1,
      paddingVertical: 8,
      color: "white",
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <Ionicons name="search" size={24} color="black" onPress={handleSearch} />
    </View>
  );
};


export default SearchBox;
