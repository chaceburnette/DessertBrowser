import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@components';

const imageStyle = { width: 100, height: 100 };

const DessertListItem = ({ item }) => {
  const navigation = useNavigation();

  const _navigateToDetails = () => {
    navigation.navigate('DessertDetails', {
      dessertId: item.idMeal,
      name: item.strMeal
    });
  };

  return (
    <>
      <Divider />
      <TouchableOpacity style={[s.pa2, s.flx_row]} onPress={_navigateToDetails}>
        <Image style={imageStyle} source={{ uri: item.strMealThumb }} />
        <Text style={[s.f6, s.ml3, s.flx_i]}>{item.strMeal}</Text>
      </TouchableOpacity>
    </>
  );
};

export default DessertListItem;
