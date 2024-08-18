import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Boards = Array.from({ length: 12 }, (_, index) => `Board ${index + 1}`);

const BoardScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Boards}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Adjust as needed
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 10,
    padding: 20,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BoardScreen;
