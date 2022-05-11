import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, NavigatorIOS } from 'react-native';
import { RootStackParams } from '../navigator/navigator';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { top } = useSafeAreaInsets();

  return (
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.canGoBack();
          }}
          activeOpacity={0.8}
          style={{ ...styles.backbutton, top: top + 10 }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
      </View>
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
});
