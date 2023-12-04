import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../screens/home/Home';
import Notification from '../../screens/notification/Notification';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../bottom-tab/BottomTab';
import Contact from '../../screens/contact/Contact';

const Stack = createStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='contact' component={Contact}/>
        </Stack.Navigator>
    )
}


const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="botton-tab" component={BottomTab} />
            <Stack.Screen name="notification" component={Notification} />

        </Stack.Navigator>
    )
}

export default StackNav