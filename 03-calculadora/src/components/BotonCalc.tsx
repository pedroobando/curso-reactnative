import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/ThemeApp';

export enum typeColor {
  grisClaro = 1,
  grisOscuro,
  naranja,
}

interface iBotonCalc {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numero: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: iBotonCalc) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : styles.boton.width,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
