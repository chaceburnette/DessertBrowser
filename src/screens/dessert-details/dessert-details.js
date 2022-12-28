import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles as s } from 'react-native-style-tachyons';
import { DessertStore } from '@store';
import { Divider } from '@components';
import SectionTitle from './components/section-title.component';
import Ingredients from './components/ingredients.component';

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
      <Divider />
      <SectionTitle>Ingredients</SectionTitle>
      <Ingredients dessert={dessert} />
      <Divider />
      <SectionTitle> Instructions</SectionTitle>
      <Text style={[s.f7, s.mb4]}>{dessert.strInstructions}</Text>
    </ScrollView>
  );
};

export default DessertDetails;
