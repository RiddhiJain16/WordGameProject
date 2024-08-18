import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

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
        <View style={styles.modalContent}>
          <Text style={styles.title}>Settings</Text>
          
          <TouchableOpacity onPress={toggleTimer} style={styles.option}>
            <Text style={styles.optionText}>Timer</Text>
            <Text style={styles.optionText}>{timer ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={toggleSound} style={styles.option}>
            <Text style={styles.optionText}>Sound</Text>
            <Text style={styles.optionText}>{sound ? 'On' : 'Off'}</Text>
          </TouchableOpacity>

          <Button title="Close" onPress={onClose} />
        </View>
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
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
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
  },
});

export default SettingScreen;
