import React, {useEffect, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigator/authnavigator';
import { initializeApp } from "firebase/app";
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import DrawerNavigator from './src/navigator/drawernavigator';
import { useSelector } from 'react-redux';
import MainNavigator from './src/navigator/mainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {


  const [fontsLoaded] = useFonts({
    '"Robotto-Medium",': require('./assets/fonts/Roboto-Medium.ttf'),
    '"Robotto-Light",': require('./assets/fonts/Roboto-Medium.ttf'),
    '"Robotto-Regular",': require('./assets/fonts/Roboto-Medium.ttf'),
    '"Robotto-Bold",': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      const firebaseConfig = {
        apiKey: "AIzaSyDyIq1jrC4pEaBt9DzB26VamPdROTe7NFk",
        authDomain: "dairyfarm-be3d5.firebaseapp.com",
        projectId: "dairyfarm-be3d5",
        storageBucket: "dairyfarm-be3d5.appspot.com",
        messagingSenderId: "809219276650",
        appId: "1:809219276650:web:68227a1a5d8f16e63e2f13",
        measurementId: "G-VSSJHLDWFZ"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
     // const analytics = getAnalytics(app);
}
prepare();
}, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
   <NavigationContainer onReady={onLayoutRootView}>
   <MainNavigator/>
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
