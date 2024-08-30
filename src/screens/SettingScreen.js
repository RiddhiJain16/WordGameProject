import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SettingScreen = ({ visible, onClose, soundEnabled, setSoundEnabled }) => {
  const [timer, setTimer] = useState(true); // Default state for timer
  const [sound, setSound] = useState(soundEnabled); // Default state for sound

  // Update local sound state when soundEnabled prop changes
  useEffect(() => {
    setSound(soundEnabled);
  }, [soundEnabled]);

  const toggleTimer = () => setTimer(prevTimer => !prevTimer);

  const toggleSound = () => {
    const newSoundState = !sound;
    setSound(newSoundState);
    setSoundEnabled(newSoundState); // Notify parent component about the change
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={['#002045', '#04459e', '#c9c9f9']}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    color: '#ffffff',
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
    color: '#ffffff',
  },
  closeButton: {
    backgroundColor: '#05479b',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
