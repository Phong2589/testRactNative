import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Setting from './screens/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';

import waterGlass from './assets/water-glass.png'


const Stack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function CategoriesFun() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Categories} options={{headerShown: false}}/>
    <Stack.Screen name="DetailProduct" component={Category} options={({ route }) => ({ title: route.params.categoryName })} />
  </Stack.Navigator>
  );
}

function CartFun() {
  return (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={Cart} />
  </CartStack.Navigator>
  );
}

function OrdersFun() {
  return (
  <OrdersStack.Navigator>
    <OrdersStack.Screen name="Orders" component={Orders} />
  </OrdersStack.Navigator>
  );
}

function SettingFun() {
  return (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Setting" component={Setting} />
  </SettingStack.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>

      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'SettingTab') {
            iconName = 'settings-outline';
          }
          else if(route.name === 'CartTab'){
            iconName = 'cart-outline';  
          }
          else if(route.name === 'OrdersTab'){
            iconName = 'list-outline';  
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="HomeTab" component={CategoriesFun} />
        <Tab.Screen name="CartTab" component={CartFun} />
        <Tab.Screen name="OrdersTab" component={OrdersFun} />
        <Tab.Screen name="SettingTab" component={SettingFun} />
      </Tab.Navigator>

    </NavigationContainer>



  );
}

export default AppNavigation;