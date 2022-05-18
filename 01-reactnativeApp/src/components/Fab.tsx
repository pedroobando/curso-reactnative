import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
interface FabProp {
  title: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}

export const Fab = ({title, onPress, position = 'br'}: FabProp) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          styles.fabLocationB,
          position !== 'bl' ? styles.fabLocationBR : styles.fabLocationBL,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocationB,
          position !== 'bl' ? styles.fabLocationBR : styles.fabLocationBL,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('indigo', true, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationB: {
    position: 'absolute',
    bottom: 20,
  },
  fabLocationBL: {
    left: 20,
  },
  fabLocationBR: {
    right: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabL: {
    backgroundColor: '#f07174',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
