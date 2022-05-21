import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavegator} from './StackNavegator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 560 ? 'permanent' : 'front'}}>
      <Drawer.Screen
        name="StackNavegator"
        options={{title: 'Home'}}
        component={StackNavegator}
      />
      <Drawer.Screen
        name="SettingScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
