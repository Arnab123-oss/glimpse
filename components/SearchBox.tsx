import React, { useState } from 'react';
import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // You may need to install expo-vector-icons for this

interface SearchBoxProps {
  onSearch: (text: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const theme = useColorScheme();
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
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginTop: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
      color: theme === 'dark'? 'white' : 'black',
    },
  });
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <Ionicons name="search" size={24} color="black" onPress={handleSearch} />
    </ThemedView>
  );
};


export default SearchBox;
