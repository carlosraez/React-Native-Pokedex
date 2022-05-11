import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigator/navigator';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PokemonDetail } from '../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { name, id, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          activeOpacity={0.8}
          style={{ ...styles.backbutton, top: top + 10 }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text style={{ ...styles.name, top: top + 40 }}>
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../../src/assets/pokebola-blanca.png')}
          style={{ ...styles.pokebola }}
        />
        <FadeInImage uri={picture} style={{ ...styles.pokemonImage }} />
      </View>
      {isLoading && (
        <View style={{ ...styles.loadingIndicator }}>
          <ActivityIndicator color={color} size={60} />
        </View>
      )}
      <PokemonDetail pokemon={pokemon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backbutton: {
    position: 'absolute',
    left: 20,
  },
  name: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokebola: {
    width: 250,
    height: 250,
    top: 10,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
