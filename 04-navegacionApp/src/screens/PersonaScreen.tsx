import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navegator/StackNavegator';

import {styles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

// interface Persona {
//   id: number;
//   nombre: string;
// }

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUser} = useContext(AuthContext);

  // const params = route.params as Persona;
  const {params} = route;
  const jsonPersona = JSON.stringify(params, null, 3);

  useEffect(() => {
    navigation.setOptions({title: params.nombre});
    return () => {};
  }, []);

  useEffect(() => {
    changeUser(params.nombre);
    return () => {};
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{jsonPersona}</Text>
    </View>
  );
};
