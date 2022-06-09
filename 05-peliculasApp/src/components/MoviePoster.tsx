import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // width: 300,
    // height: 300,
    borderRadius: 16,
    margin: 2,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 12,
  },
});
