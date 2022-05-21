import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>Setting Screen</Text>
      <Image
        style={styles.settingImagen}
        source={{
          uri: 'https://www.petclic.es/wikipets/wp-content/uploads/sites/default/files/library/pinscher_mini.jpg',
        }}
      />
    </View>
  );
};
