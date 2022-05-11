import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  if (!pokemon) {
    return null;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
        marginTop: 360,
      }}>
      <View style={styles.detailInformation}>
        <Text style={styles.title}>Types:</Text>
        {/* types */}
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types &&
            pokemon.types.map(({ type }) => {
              return (
                <Text style={{ ...styles.typeText }} key={type.name}>
                  {type.name}
                </Text>
              );
            })}
        </View>
        <View>
          <Text style={styles.title}>Peso:</Text>
          <Text>{pokemon.weight}</Text>
        </View>
        <View>
          <Text style={styles.title}>Sprites:</Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites ? pokemon.sprites.front_default : ''}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites ? pokemon.sprites.back_default : ''}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites ? pokemon.sprites.front_shiny : ''}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites ? pokemon.sprites.back_shiny : ''}
          style={styles.basicSprite}
        />
      </ScrollView>
      <View style={styles.detailInformation}>
        <Text style={styles.title}>Habilidades Base:</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities &&
            pokemon.abilities.map(({ ability }) => {
              return (
                <Text style={{ ...styles.typeText }} key={ability.name}>
                  {ability.name + ' '}
                </Text>
              );
            })}
        </View>
      </View>
      <View style={styles.detailInformation}>
        <Text style={styles.title}>Movimientos:</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {pokemon.moves &&
            pokemon.moves.map(({ move }) => {
              return (
                <Text
                  style={{ ...styles.typeText, marginRight: 10 }}
                  key={move.name}>
                  {move.name}
                </Text>
              );
            })}
        </View>
        <Text style={styles.title}>Stats:</Text>
        <View>
          {pokemon.stats &&
            pokemon.stats.map((stat, i) => {
              return (
                <View
                  key={(stat.stat.name, i)}
                  style={{ flexDirection: 'row' }}>
                  <Text
                    style={{ ...styles.typeText, marginRight: 10, width: 150 }}>
                    {stat.stat.name}
                  </Text>
                  <Text style={{ ...styles.typeText, fontWeight: 'bold' }}>
                    {stat.base_stat}
                  </Text>
                </View>
              );
            })}
        </View>
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <FadeInImage
            uri={pokemon.sprites ? pokemon.sprites.front_default : ''}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailInformation: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  typeText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 130,
    height: 130,
  },
});
