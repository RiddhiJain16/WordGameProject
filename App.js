import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import SettingScreen from './src/screens/SettingScreen';
import BoardScreen from './src/screens/BoardScreen';
import PlayScreen from './src/screens/PlayScreen';
import SoundManager from './src/screens/SoundManager';

const Stack = createNativeStackNavigator();

const App = () => {
  const [soundEnabled, setSoundEnabled] = useState(true); // Default sound setting

  return (
    <NavigationContainer>
      <SoundManager soundEnabled={soundEnabled} />
      <Stack.Navigator initialRouteName="SplashScreen"> 
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SettingScreen" 
          component={(props) => (
            <SettingScreen
              {...props}
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
            />
          )}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BoardScreen"
          component={BoardScreen}
          options={{ title: 'Select Board' }} 
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
