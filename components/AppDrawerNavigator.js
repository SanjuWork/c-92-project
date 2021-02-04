import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import PendingPaymentsScreen from "../screens/PendingPaymentsScreen";
import { MaterialIcons, Ionicons } from 'react-native-vector-icons'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            drawerIcon: <Ionicons name="home"  />
        }
    },
    Pending: {
        screen: PendingPaymentsScreen,
        navigationOptions:{
            drawerIcon: <MaterialIcons name='payment' />
        }
    }
},
    {
        initialRouteName: 'Home'
    })
