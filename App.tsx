import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fff" />
    </SafeAreaProvider>
  );
};

export default App;
