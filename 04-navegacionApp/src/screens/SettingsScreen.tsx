import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {colores, styles} from '../themes/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {
    authState: {favoriteIcon, username, isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>Setting Screen</Text>
      <Text>{username}</Text>

      {favoriteIcon && (
        <Icon name={`${favoriteIcon}`} size={80} color={colores.primary} />
      )}

      {!isLoggedIn && (
        <Image
          style={styles.settingImagen}
          source={{
            uri: 'https://www.petclic.es/wikipets/wp-content/uploads/sites/default/files/library/pinscher_mini.jpg',
          }}
        />
      )}
    </View>
  );
};
