import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingScreen from './SettingScreen';

const MainScreen = () => {

  const nav = useNavigation();
  const [issetVisible, setVisible] = useState(false);

  const openSettings = () => setVisible(true);
  const closeSettings = () => setVisible(false);
  
    return (
      <View style={styles.container}>
        {/* Settings Icon */}
        <TouchableOpacity onPress={openSettings} style={styles.settingsIcon}>
        <Image source={require('../../assets/settings.png')} style={styles.icon} />
      </TouchableOpacity>
        
        {/* Points Count */}
        <Text style={styles.points}>Points: 1234</Text>
  
        {/* Play Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('PlayScreen')}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        
        {/* Level Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('BoardScreen')}>
          <Text style={styles.buttonText}>Boards</Text>
        </TouchableOpacity>
        
        {/* Play Room Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('PlayroomScreen')}>
          <Text style={styles.buttonText}>Play Room</Text>
        </TouchableOpacity>

        <SettingScreen visible={issetVisible} onClose={closeSettings} />

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    settingsIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    icon: {
      width: 30,
      height: 30,
    },
    points: {
      fontSize: 18,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });
  
  export default MainScreen;