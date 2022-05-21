import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../navegator/StackNavegator';

import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Pagina01Screen'> {}

export const Pagina01Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 01 Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina02Screen')}
      />

      <Text>Navegacion con argumentos</Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
