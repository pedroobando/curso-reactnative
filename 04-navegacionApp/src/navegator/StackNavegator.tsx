import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Pagina01Screen} from '../screens/Pagina01Screen';
import {Pagina02Screen} from '../screens/Pagina02Screen';
import {Pagina03Screen} from '../screens/Pagina03Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina01Screen: undefined;
  Pagina02Screen: undefined;
  Pagina03Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavegator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina02Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          // ios
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Pagina01Screen" component={Pagina01Screen} />
      <Stack.Screen name="Pagina02Screen" component={Pagina02Screen} />
      <Stack.Screen name="Pagina03Screen" component={Pagina03Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
