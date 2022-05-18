import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';
// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.5}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={{...styles.title, color: width >= 420 ? 'red' : 'black'}}>
        W:{width} - H:{height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: 200, backgroundColor: 'red'},
  cajaMorada: {backgroundColor: '#5856D6', width: '50%', height: '50%'},
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: '90%',
    height: 60,
    marginTop: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
  },
});
