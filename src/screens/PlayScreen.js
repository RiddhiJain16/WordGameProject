import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SettingScreen from './SettingScreen'; // Import your SettingScreen component

const PlayScreen = () => {
  const nav = useNavigation();
  const [isSettingVisible, setIsSettingVisible] = useState(false);

  const openSettings = () => setIsSettingVisible(true);
  const closeSettings = () => setIsSettingVisible(false);

  return (
    <LinearGradient
      colors={['#002045', '#04459e', '#c9c9f9']} // Same gradient as the main screen
      style={styles.container}
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
          <Image source={require('../../assets/back.png')} style={styles.icon} />
        </TouchableOpacity>


        {/* Settings Button */}
        <TouchableOpacity onPress={openSettings} style={styles.settingsButton}>
          <Image source={require('../../assets/settings.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>00:00</Text>
      </View>

      {/* Board */}
      <View style={styles.board}>
        <Text style={styles.boardText}>Board Area</Text>
      </View>

      {/* Task Cards and Info */}
      <View style={styles.taskContainer}>
        <View style={styles.taskPileGreen}>
          <Text style={styles.taskText}>Green Task Card</Text>
        </View>
        <View style={styles.taskInfoBox}>
          <Text style={styles.taskInfoText}>Current Task: ...</Text>
        </View>
      </View>

      {/* Points and Finds */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points: 0</Text>
        <Text style={styles.findsText}>Finds: 0/5</Text>
      </View>

      {/* Settings Popup */}
      <SettingScreen visible={isSettingVisible} onClose={closeSettings} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  settingsButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  timerContainer: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  board: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardText: {
    fontSize: 18,
  },
  taskContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  taskPileGreen: {
    backgroundColor: 'green',
    padding: 10,
  },
  taskInfoBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  taskInfoText: {
    fontSize: 16,
  },
  pointsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  findsText: {
    fontSize: 16,
    marginTop: 10,
    color: '#FFFFFF',
  },
});

export default PlayScreen;
