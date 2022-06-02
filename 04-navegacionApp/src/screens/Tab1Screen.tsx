import React from 'react';
import {Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {TochableIcon} from '../components/TochableIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <Text>Iconos</Text>
      <Text>
        <TochableIcon iconName="airplane-outline" color="#900" />
        <TochableIcon iconName="airplane-outline" color="#550" />
        <TochableIcon iconName="basketball-outline" color="#550" />
        <TochableIcon iconName="calculator-outline" color="#550" />
        <TochableIcon iconName="car-outline" color="#550" />
        <TochableIcon iconName="fast-food-outline" color="#550" />
        <TochableIcon iconName="fitness-outline" color="#550" />
        <TochableIcon iconName="notifications-outline" color="#550" />
        <TochableIcon iconName="people-outline" color="#550" />
        <TochableIcon iconName="business-outline" color="#550" />
      </Text>
    </View>
  );
};
