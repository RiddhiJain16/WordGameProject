import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SettingScreen from './SettingScreen';

const MainScreen = () => {

  const nav = useNavigation();
  const [issetVisible, setVisible] = useState(false);

  const openSettings = () => setVisible(true);
  const closeSettings = () => setVisible(false);
  
  return (
    <LinearGradient
      colors={['#002045', '#04459e', '#c9c9f9']} // Example gradient colors
      style={styles.container}
    >
      <View style={styles.topSection}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
          <Image source={require('../../assets/back.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Settings Icon */}
        <TouchableOpacity onPress={openSettings} style={styles.settingsIcon}>
          <Image source={require('../../assets/settings.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        
        <View style={styles.pointsContainer}>
            <Image source={require('../../assets/points.png')} style={styles.pointsicon} />
            <Text style={styles.points}>1234</Text>
        </View>

        {/* Level Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('BoardScreen')}>
          <Text style={styles.buttonText}>Boards</Text>
        </TouchableOpacity>

        {/* Play Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('PlayScreen')}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>


        {/* Play Room Button */}
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('PlayroomScreen')}>
          <Text style={styles.buttonText}>Play Room</Text>
        </TouchableOpacity>
      </View>

      <SettingScreen visible={issetVisible} onClose={closeSettings} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  pointsicon: {
    width: 30,
    height: 30,
    marginRight: 5, // Add some spacing between the image and text
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 20,
  },
  bottomSection: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  points: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '900', // Ensuring the text is bold
  },
  button: {
    backgroundColor: '#05479b',
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#c9c9f9',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default MainScreen;