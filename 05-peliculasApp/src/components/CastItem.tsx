import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditInterface';

interface Props {
  actor: Cast;
  height?: number;
  width?: number;
}

export const CastItem = ({actor, height = 80, width = 200}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <>
      <View style={{...styles.container, height, width}}>
        {actor.profile_path && <Image source={{uri}} style={styles.imagen} />}

        <View style={styles.comment}>
          <Text style={styles.commentName}>{actor.name}</Text>
          <Text style={styles.commentPaper}>{actor.character}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 8,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  imagen: {
    flex: 4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 5,
  },
  comment: {
    flex: 6,
    padding: 5,

    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
  commentName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  commentPaper: {
    fontSize: 12,
    opacity: 0.7,
  },
});
