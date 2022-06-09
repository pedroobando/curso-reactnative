import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditInterface';
import {MovieDBFull} from '../interfaces/movieInterfaces';
import {CastItem} from './CastItem';

// currencyFormatter.format(1000000, {code: 'USD'});
// => '$1,000,000.00'

interface Props {
  movieFull: MovieDBFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={styles.details}>
        <View style={styles.average}>
          <Icon name="star-outline" size={16} color="gray" />
          <Text> {movieFull.vote_average}</Text>
          <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={styles.subTitle}>Historia</Text>
        <Text style={styles.comment}>{movieFull.overview}</Text>
        <Text style={styles.subTitle}>Presupuesto</Text>
        <Text style={styles.comment}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      <View>
        <Text
          style={{
            ...styles.subTitle,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 5,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 100}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  details: {
    marginHorizontal: 20,
  },
  average: {
    flexDirection: 'row',
    fontSize: 16,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  comment: {
    fontSize: 16,
  },
});
