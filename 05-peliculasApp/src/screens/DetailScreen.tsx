import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigations/Navigation';

import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
// import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // const navigate = useNavigation();

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.titleOriginal}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={35} color="gray" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
      {/* Backbuttom */}
      <TouchableOpacity
        style={styles.backButtom}
        onPress={() => navigation.pop()}>
        <Icon
          name="arrow-back-outline"
          size={60}
          color="white"
          style={{opacity: 0.7}}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // width: 0,
    // paddingHorizontal: 5,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.8,
    paddingBottom: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 18,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleOriginal: {fontSize: 18, marginBottom: 1, opacity: 0.8},
  title: {fontSize: 20, fontWeight: 'bold'},
  backButtom: {
    // display:''
    color: 'white',
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
  },
});
