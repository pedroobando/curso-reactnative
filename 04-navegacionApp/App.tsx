import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavegator} from './src/navegator/StackNavegator';
// import {MenuLateralBasico} from './src/navegator/MenuLateralBasico';
import {MenuLateral} from './src/navegator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import {TabsNavigator} from './src/navegator/TabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavegator /> */}
        <MenuLateral />
        {/* <TabsNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
