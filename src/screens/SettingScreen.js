import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const SettingScreen = ({ visible, onClose }) => {
  const [timer, setTimer] = useState(true); // Default state for timer
  const [sound, setSound] = useState(true); // Default state for sound

  const toggleTimer = () => setTimer(!timer);
  const toggleSound = () => setSound(!sound);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={['#002045', '#04459e', '#c9c9f9']} // Gradient colors
          style={styles.modalContent}
        >
          <Text style={styles.title}>Settings</Text>
          
          <TouchableOpacity onPress={toggleTimer} style={styles.option}>
            <Text style={styles.optionText}>Timer</Text>
            <Text style={styles.optionText}>{timer ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={toggleSound} style={styles.option}>
            <Text style={styles.optionText}>Sound</Text>
            <Text style={styles.optionText}>{sound ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#ffffff', // White text for contrast
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff', // White text for contrast
  },
  closeButton: {
    backgroundColor: '#05479b', // Same background color as board buttons
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    width: 'relative',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff', // Same text color as board buttons
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
