import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel-v4';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {getColorImage} from '../helpers/getColorImage';
import {GradientContext} from '../context/GradientContext';

// const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {width: windowsWidth} = useWindowDimensions();
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary, secondary] = await getColorImage(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying !== undefined) {
      if (nowPlaying.length > 0) {
        getPosterColors(0);
      }
    }
    // console.log(typeof nowPlaying);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={'blue'} size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Peliculas en cartelera */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowsWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.8}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas En Cines */}
          <HorizontalSlider title="Populars" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Up Coming" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
