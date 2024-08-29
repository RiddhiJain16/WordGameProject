import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const SplashScreen = () => {

    const nav = useNavigation();
    

    useEffect(() => {

        const timer = setTimeout(() => {
            nav.replace('MainScreen');
        }, 2000);

        return() => clearTimeout(timer);

    },[nav]);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: width,
        height: height,
      },

});

export default SplashScreen;