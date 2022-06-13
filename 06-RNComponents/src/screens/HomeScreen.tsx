/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigations/StackNavigator';
import {appStyles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/interface';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'color-wand-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = ({navigation}: Props) => {
  const {navigate} = navigation;
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => (
    <View>
      <Text style={appStyles.title}>Opciones de Menu</Text>
    </View>
  );

  const itemSeparator = () => <View style={appStyles.separatorItem} />;

  return (
    <View style={{...appStyles.homeContainer, top}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        ListHeaderComponent={() => renderListHeader()}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => itemSeparator()}
      />

      <Button title="Testing" onPress={() => navigate('TestScreen')} />
    </View>
  );
};
