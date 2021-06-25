import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native'; 
import  AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { Background } from './src/components/Background';

import { SingIn } from './src/screens/SingIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold
  });
  
  if (!fontsLoaded){
    return <AppLoading />
  }
  return (
    <Background>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />

      <SingIn />
    </Background>
  );
}

