import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  const myIcon = <Icon name="airplane-outline" size={50} color="#900" />;

  return (
    <View>
      <Text>Iconos</Text>
      {myIcon}
      <Icon name="airplane-outline" size={50} color="#900" />
    </View>
  );
};
