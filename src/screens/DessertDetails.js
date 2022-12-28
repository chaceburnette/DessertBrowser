import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles as s } from 'react-native-style-tachyons';
import DessertStore from '../store/dessert.store';

const windowWidth = Dimensions.get('window').width;

const DessertDetails = () => {
  const [dessert, setDessert] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
    _loadDessert();
  }, []);

  const _loadDessert = async () => {
    let dessert = await DessertStore.getDessertById(route.params.dessertId);
    setDessert(dessert);
  };

  return (
    <ScrollView style={[s.ph3, s.pb4]}>
      {!!dessert.strMealThumb && (
        <Image
          source={{ uri: dessert.strMealThumb }}
          style={[s.asc, { width: windowWidth, height: windowWidth }]}
        />
      )}
      <Text style={[s.f3, s.mt3]}>{dessert.strMeal}</Text>
      <View style={[s.bt, { borderColor: '#bbbbbb' }, s.mt3]} />
      <Text style={[s.f5, { color: '#666666' }, s.mv3]}>Ingredients</Text>
      <Ingredients dessert={dessert} />
      <View style={[s.bt, { borderColor: '#bbbbbb' }, s.mt3]} />
      <Text style={[s.f5, { color: '#666666' }, s.mv3]}>Instructions</Text>
      <Text style={[s.f7, s.mb4]}>{dessert.strInstructions}</Text>
    </ScrollView>
  );
};

const Ingredients = ({ dessert }) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let ingredient = dessert[`strIngredient${i}`];
    if (!ingredient || ingredient === '') {
      continue;
    }
    ingredients.push(`${dessert[`strMeasure${i}`]} ${ingredient}`);
  }

  return (
    <View style={s.flx_i}>
      {ingredients.map((value, index) => (
        <Text style={[s.f6, s.mb2]} key={index}>
          {value}
        </Text>
      ))}
    </View>
  );
};

export default DessertDetails;
