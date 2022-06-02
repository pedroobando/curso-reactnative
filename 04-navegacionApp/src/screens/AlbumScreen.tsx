import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {authState, signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>AlbumScreen</Text>

      {authState.isLoggedIn && (
        <Button title="LogOut" onPress={signOut}>
          Logout
        </Button>
      )}
    </View>
  );
};
