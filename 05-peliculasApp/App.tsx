import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {GradientProvider} from './src/context/GradientContext';
import {Navigation} from './src/navigations/Navigation';

// import {FadeScreen} from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>

      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
