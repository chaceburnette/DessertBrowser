import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DessertStore } from '@store';
import { DessertList, DessertDetails } from '@screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DessertList"
          component={DessertList}
          options={{ title: 'Desserts' }}
        />
        <Stack.Screen name="DessertDetails" component={DessertDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DessertStore.Provider(App);
