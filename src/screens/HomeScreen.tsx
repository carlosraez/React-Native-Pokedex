import React from 'react';

import { View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { useGetPokemons } from '../hooks/useGetPokemons';

export const HomeScreen = () => {
  useGetPokemons();
  const { top } = useSafeAreaInsets();
  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeBolaBG}
      />
      <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
        Pokedex
      </Text>
    </View>
  );
};
