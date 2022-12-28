import React from 'react';
import { TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import DessertStore from '../store/dessert.store';
import { useNavigation } from '@react-navigation/native';

const DessertListItem = ({ item }) => {
  const navigation = useNavigation();

  const _navigateToDetails = () => {
    navigation.navigate('DessertDetails', {
      dessertId: item.idMeal,
      name: item.strMeal
    });
  };

  return (
    <TouchableOpacity style={[s.pa2, s.flx_row]} onPress={_navigateToDetails}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: item.strMealThumb }}
      />
      <Text style={s.ml3}>{item.strMeal}</Text>
    </TouchableOpacity>
  );
};

const DessertList = () => {
  let {
    state: { desserts }
  } = DessertStore.useStore();

  return (
    <FlatList
      data={desserts}
      renderItem={({ item }) => <DessertListItem item={item} />}
      keyExtractor={item => item.idMeal}
    />
  );
};

export default DessertList;
