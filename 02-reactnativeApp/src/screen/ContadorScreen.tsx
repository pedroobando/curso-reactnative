import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  const handleContador = (num: number) => {
    setContador(pres => pres + num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador:{contador}</Text>
      <Fab title="+1" onPress={() => handleContador(1)} />
      <Fab title="-1" onPress={() => handleContador(-1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
