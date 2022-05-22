import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {StackNavegator} from './StackNavegator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {TabsNavigator} from './TabsNavigator';

import {styles} from '../themes/appTheme';

// import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  // const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{headerStyle: {elevation: 1}, headerShown: false}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
      <Drawer.Screen name="StackNavegator" component={StackNavegator} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  // console.log(props);
  return (
    <DrawerContentScrollView>
      {/* Opciones del Avatar */}
      <View style={styles.avatarContent}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: 'https://img2.freepng.es/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg',
          }}
        />
      </View>

      {/* Opciones del Menu */}
      <View style={styles.menuOption}>
        <TouchableOpacity
          style={styles.menuBotton}
          onPress={() => navigation.navigate('TabsNavigator')}>
          <Icon name="albums-outline" size={25} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tabs Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBotton}
          onPress={() => navigation.navigate('StackNavegator')}>
          <Icon name="bookmarks-outline" size={25} style={styles.menuIcon} />
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBotton}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Icon name="settings-outline" size={25} style={styles.menuIcon} />
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
