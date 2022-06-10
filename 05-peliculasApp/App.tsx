import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {Navigation} from './src/navigations/Navigation';
import {FadeScreen} from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
