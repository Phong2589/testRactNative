import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './screens/Categories';
import Category from './screens/Category';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen name="DetailProduct" component={Category} options={({ route }) => ({ title: route.params.categoryName })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;