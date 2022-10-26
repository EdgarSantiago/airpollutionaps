/* eslint-disable react-native/no-inline-styles */
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';

import HomeScreen from '@screens/home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
