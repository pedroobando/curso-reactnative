import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 300,
    // height: 400,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 3,
    borderColor: 'white',
    right: 0,
    // top: 5,
    // left: 20,
  },
  cajaNaranja: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 3,
    borderColor: 'white',
    bottom: 0,
    right: 0,
    // bottom: -5,
    // left: -100,
  },
  cajaVerde: {
    // position: 'absolute',
    // width: 100,
    // height: '50%',
    backgroundColor: 'green',
    borderWidth: 3,
    borderColor: 'white',
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
