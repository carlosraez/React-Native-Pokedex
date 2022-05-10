import React from 'react';

import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { useGetPokemons } from '../hooks/useGetPokemons';

export const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = useGetPokemons();

  const { top } = useSafeAreaInsets();
  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeBolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.picture }}
            style={{ width: 100, height: 100 }}
          />
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
        }
      />
    </View>
  );
};

/* <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
        Pokedex
      </Text> */
