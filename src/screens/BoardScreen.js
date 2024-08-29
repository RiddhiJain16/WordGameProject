import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Boards = Array.from({ length: 12 }, (_, index) => `Board ${index + 1}`);

const BoardScreen = () => {
  const nav = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#002045', '#04459e', '#c9c9f9']} // Gradient colors
      style={styles.container}
    >
      <FlatList
        data={Boards}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={2} // Set to 2 columns
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContent}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ddeaf8',
    borderRadius: 5,
    margin: 10,
    padding: 20, // Adjusted for size
    width: 140, // Adjusted for two columns
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002045',
  },
});

export default BoardScreen;
