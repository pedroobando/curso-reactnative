import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavegator} from './src/navegator/StackNavegator';
// import {MenuLateralBasico} from './src/navegator/MenuLateralBasico';
import {MenuLateral} from './src/navegator/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavegator /> */}
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
