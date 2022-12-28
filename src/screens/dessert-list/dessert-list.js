import React from 'react';
import { FlatList } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import { DessertStore } from '@store';
import DessertListItem from './components/dessert-list-item.component';

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
