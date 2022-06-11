import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

// const {width: windowsWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {width: windowsWidth} = useWindowDimensions();
  const {isLoading, nowPlaying, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();

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
