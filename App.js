import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import SettingScreen from './src/screens/SettingScreen';
import BoardScreen from './src/screens/BoardScreen';
import PlayScreen from './src/screens/PlayScreen';
// import PlayroomScreen from '../src/screens/PlayroomScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"> 
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide header for Splash
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ headerShown: false }} />

        <Stack.Screen 
          name="SettingScreen" 
          component={SettingScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BoardScreen"
          component={BoardScreen}
          options={{ title: 'Select Board' }} // Title for boardScreen
        />

        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{ headerShown: false}} // Title for boardScreen
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;