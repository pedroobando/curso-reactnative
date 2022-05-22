import React from 'react';

import {Platform, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavegator} from './StackNavegator';
import {TopTabNavigator} from './TopTabNavigator';

import {colores} from '../themes/appTheme';

export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <ButtonTabsIOS /> : <ButtonTabsAndroid />;
};

const TabNavAndroid = createMaterialBottomTabNavigator();

const ButtonTabsAndroid = () => {
  const iconTab01 = <Icon name="airplane-outline" size={25} color="white" />;
  const iconTab02 = <Icon name="copy-outline" size={25} color="white" />;
  const iconTab03 = <Icon name="attach-outline" size={25} color="white" />;

  return (
    <TabNavAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({color, focused}) => {
          let iconName: JSX.Element = iconTab01;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = iconTab01;
              break;

            case 'Tab2Screen':
              iconName = iconTab02;
              break;

            case 'StackNavegator':
              iconName = iconTab03;
              break;

            default:
              break;
          }

          return <>{iconName}</>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: () => <Text style={{color: colores.primary}}>IC</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <TabNavAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <TabNavAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />

      <TabNavAndroid.Screen
        name="StackNavegator"
        options={{title: 'Stack'}}
        component={StackNavegator}
      />
    </TabNavAndroid.Navigator>
  );
};

const TabNavIOS = createBottomTabNavigator();
const ButtonTabsIOS = () => {
  return (
    <TabNavIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavegator':
              iconName = 'SN';
              break;

            default:
              break;
          }

          return (
            <Text style={{color: focused ? 'red' : color}}>{iconName}</Text>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: () => <Text style={{color: colores.primary}}>IC</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <TabNavIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <TabNavIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <TabNavIOS.Screen
        name="StackNavegator"
        options={{title: 'Stack'}}
        component={StackNavegator}
      />
    </TabNavIOS.Navigator>
  );
};
