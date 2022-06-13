import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaView} from 'react-native';

import {StackNavigator} from './src/navigations/StackNavigator';
// import {HomeScreen} from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
// import 'react-native-reanimated';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
