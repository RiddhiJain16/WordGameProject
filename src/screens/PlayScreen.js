import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SettingScreen from './SettingScreen'; // Import your SettingScreen component

const PlayScreen = () => {
  const nav = useNavigation();
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const [isPlayPopupVisible, setIsPlayPopupVisible] = useState(true); // State to manage play popup visibility
  const [timerOn, setTimerOn] = useState(false); // State to control the timer
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running
  const [time, setTime] = useState(0); // State to keep track of elapsed time

  // Function to open settings screen
  const openSettings = () => setIsSettingVisible(true);

  // Function to close settings screen
  const closeSettings = () => {
    setIsSettingVisible(false);
    // Ensure timerOn state is updated from settings
    const settings = { timerOn: true }; // Replace with actual logic to get settings
    setTimerOn(settings.timerOn);
  };

  // Function to open play popup
  const openPlayPopup = () => setIsPlayPopupVisible(true);

  // Function to close play popup
  const closePlayPopup = () => setIsPlayPopupVisible(false);

  // Handle timer logic
  useEffect(() => {
    let timer;
    if (isTimerRunning && timerOn) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Increment time
      }, 1000);
    } else {
      // Stop the timer if not running or timer is off
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup on component unmount or timer stop
  }, [isTimerRunning, timerOn]);

  // Reset timer on component mount
  useEffect(() => {
    setTime(0); // Reset time
  }, []);

  // Start the timer if timerOn is true
  const handlePlay = () => {
    if (timerOn) {
      setIsTimerRunning(true); // Start the timer
    }
    closePlayPopup();
    // Add other game start logic here if needed
  };

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
        <Text style={styles.timerText}>{`Time: ${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`}</Text>
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
          <Text style={styles.taskInfoText}>Current Task: Find the hidden object</Text>
        </View>
      </View>

      {/* Points and Finds */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points: 0</Text>
        <Text style={styles.findsText}>Finds: 0/5</Text>
      </View>

      {/* Play Popup */}
      <Modal
        transparent={true}
        visible={isPlayPopupVisible}
        animationType="slide"
        onRequestClose={closePlayPopup}
      >
        <View style={styles.playPopupContainer}>
          <LinearGradient
            colors={['#002045', '#04459e', '#c9c9f9']} // Gradient for the popup
            style={styles.playPopupContent}
          >
            <View style={styles.playPopupTopBar}>
              {/* Back Button */}
              <TouchableOpacity onPress={() => nav.navigate('MainScreen')} style={styles.backButton}>
                <Image source={require('../../assets/back.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.playPopupText}>Ready to Start?</Text>
            <Text style={styles.taskText}>Current Task: Find the hidden object</Text>
            <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>

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
  playPopupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  playPopupContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  playPopupTopBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  playPopupText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  playButton: {
    backgroundColor: '#0044cc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
});

export default PlayScreen;
