import React from 'react';
import { SafeAreaView } from 'react-native';

import Navigator from './src/navigation/Navigator.tsx';
import { Colors } from './src/theme/Colors.ts';

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
