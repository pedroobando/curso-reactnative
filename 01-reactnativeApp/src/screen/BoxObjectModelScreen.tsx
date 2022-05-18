import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Box Object Model Screen</Text>
    <Text style={styles.subTitle}>Parte Dos</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'navi'},
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 50,
    paddingVertical: 100,
    borderWidth: 10,

    marginTop: 50,
  },
  subTitle: {
    fontSize: 16,
    color: 'white',
    borderWidth: 2,

    borderColor: 'white',
    paddingVertical: 50,
    paddingHorizontal: 30,

    // width: 300,
    marginVertical: 50,
    marginHorizontal: 50,
    backgroundColor: 'green',
  },
});
