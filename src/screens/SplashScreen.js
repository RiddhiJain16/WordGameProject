import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const nav = useNavigation();

    useEffect(() => {

        const timer = setTimeout(() => {
            nav.replace('MainScreen');
        }, 4000);

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
        width: 200,
        height: 200,
      },

});

export default SplashScreen;