import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

import {styles} from '../themes/appTheme';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;

  return (
    <View>
      <Text>ContactsScreen</Text>
      {!isLoggedIn && (
        <TouchableOpacity style={styles.menuBotton} onPress={() => signIn()}>
          <Icon name="albums-outline" size={25} style={styles.menuIcon} />
          <Text style={styles.menuText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
