
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ApplyNavigator,
      ContactNavigator, 
      HomeNavigator } from './app/navigation/StackNavigators';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Apply" component={ApplyNavigator} />
        <Drawer.Screen name="Contact" component={ContactNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

