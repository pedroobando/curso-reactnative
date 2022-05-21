import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

export const Pagina02Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras',
    });
    return () => {};
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 02 Screen</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Pagina03Screen')}
      />
    </View>
  );
};
