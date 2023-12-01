import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../screens/home/Home';
import Notification from '../../screens/notification/Notification';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../bottom-tab/BottomTab';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="home" component={BottomTab} />
            <Stack.Screen name="notification" component={Notification} />

        </Stack.Navigator>
    )
}

export default StackNav