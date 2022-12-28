import { useState, useEffect } from 'react';
import { setupStore } from '@shipt/osmosis';

const useDessertStore = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    _loadDesserts();
  }, []);

  const _loadDesserts = async () => {
    let response = await fetch(
      'https://themealdb.com/api/json/v1/1/filter.php?c=Dessert'
    );
    const data = await response.json();
    setDesserts(data.meals);
  };

  const getDessertById = async id => {
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals[0];
  };

  return {
    state: { desserts },
    getDessertById
  };
};

const DessertStore = setupStore(useDessertStore);

export default DessertStore;
