import React from 'react';

import { View, Image, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = useGetPokemons();

  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeBolaBG}
      />
      <View
        style={{
          ...styles.globalMargin,
          alignItems: 'center',
        }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                paddingBottomg: 10,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
