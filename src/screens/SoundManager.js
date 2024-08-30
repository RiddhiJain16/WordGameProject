import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av'; // Using Expo's Audio component for background music

const SoundManager = ({ soundEnabled }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sound.mp3'),
        { shouldPlay: soundEnabled, isLooping: true } // Set initial playback based on soundEnabled
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (sound) {
      sound.setIsMutedAsync(!soundEnabled);
    }
  }, [soundEnabled, sound]);

  return null;
};

export default SoundManager;
