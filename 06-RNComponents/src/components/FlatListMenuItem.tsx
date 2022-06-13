import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/interface';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{...styles.container}}>
        <Icon style={styles.icon} name={menuItem.icon} />
        <Text style={styles.text}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon style={styles.iconArrow} name="chevron-forward-outline" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  icon: {color: 'blue', marginRight: 10, opacity: 0.6, fontSize: 24},
  text: {fontSize: 20, color: 'gray'},
  iconArrow: {
    fontSize: 24,
  },
});
