import React from 'react';
import { Text, View } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

const Ingredients = ({ dessert }) => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let name = dessert[`strIngredient${i}`];
    if (!name || name === '') {
      continue;
    }
    let measurement = dessert[`strMeasure${i}`];
    ingredients.push({ measurement, name });
  }

  return (
    <View style={s.flx_i}>
      {ingredients.map((value, index) => (
        <Text style={[s.f7, s.mb2]} key={index}>
          <Text style={s.b}>{value.name}</Text> (
          <Text>{value.measurement} </Text>)
        </Text>
      ))}
    </View>
  );
};

export default React.memo(Ingredients);
