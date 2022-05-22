import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumScreen} from '../screens/AlbumScreen';

import {colores} from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarShowIcon: true,
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },

        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chats':
              iconName = 'chatbox-outline';
              break;

            case 'Contacts':
              iconName = 'people-circle-outline';
              break;

            case 'Albums':
              iconName = 'images-outline';
              break;

            default:
              break;
          }

          return (
            <>
              <Icon
                name={iconName}
                size={25}
                color={focused ? colores.primary : 'gray'}
              />
            </>
          );
        },
      })}>
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
