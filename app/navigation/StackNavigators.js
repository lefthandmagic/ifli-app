import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import IFLIHeader from "../components/IFLIHeader";
import ApplyScreen from "../screens/ApplyScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";

const ApplyStack = createStackNavigator();

export function ApplyNavigator() {
  return (
    <ApplyStack.Navigator 
    screenOptions= {{
      header: IFLIHeader 
    }}>
    <ApplyStack.Screen name="Apply" component={ApplyScreen} />
  </ApplyStack.Navigator>
  )
}

const ContactStack = createStackNavigator();

export function ContactNavigator() {
  return (
    <ContactStack.Navigator 
    screenOptions= {{
      header: IFLIHeader 
    }}>
    <ContactStack.Screen name="Contact" component={ContactScreen} />
  </ContactStack.Navigator>
  )
}

const HomeStack = createStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator 
    screenOptions= {{
      header: IFLIHeader 
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
  )
}
