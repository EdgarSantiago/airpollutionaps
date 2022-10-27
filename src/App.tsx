/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import React from 'react';

import HomeScreen from '@screens/home';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
