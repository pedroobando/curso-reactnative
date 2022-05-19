import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    // flex: 2,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    left: 200,
    top: 100,
    // bottom: -100,
    alignSelf: 'flex-start',
    rotation: 45,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    // flex: 2,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    alignSelf: 'flex-end',
    // top: 50,
    // left: 100,

    // alignSelf: 'flex-end',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    // flex: 4,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    // alignSelf: 'flex-start',
  },
});
