import React from 'react';
import { AppStackNavigator } from './AppStackNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddStudentScreen from '../screens/AddStudentScreen';
import { Ionicons } from 'react-native-vector-icons'

export const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, color }) => {
                let iconName;

                if (iconName === focused) {
                    color = 'red'
                }
                <Ionicons name='home' color={color} size={30} />
            },
            tabBarLabel: "Home",
        }
    },
    AddStudent: {
        screen: AddStudentScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, color }) => {
                let iconName;

                if (iconName === focused) {
                    color = 'blue'
                }
                <Ionicons name='person-add-sharp' color={color} size={30} />
            },
            tabBarLabel: "Add Student",
        }
    }
});
