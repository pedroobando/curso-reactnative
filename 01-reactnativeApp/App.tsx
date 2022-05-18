import React from 'react';
import {SafeAreaView} from 'react-native';
// import {FlexScreen} from './src/screen/FlexScreen';
import {TareaScreen} from './src/screen/TareaScreen';
// import {HolaMundoScreen} from './src/screen/HolaMundoScreen';
// import {ContadorScreen} from './src/screen/ContadorScreen';
// import {BoxObjectModelScreen} from './src/screen/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screen/DimensionesScreen';
// import {PositionScreen} from './src/screen/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
