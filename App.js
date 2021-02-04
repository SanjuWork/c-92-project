import React from 'react';
import { AppTabNavigator } from "./components/AppTabNavigator";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

export default function App() {
  return (
    <AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator }
})

const AppContainer = createAppContainer(switchNavigator)