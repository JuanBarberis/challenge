import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../screens/home/Home';
import Notification from '../../screens/notification/Notification';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../bottom-tab/BottomTab';
import Login from '../../screens/login/Login';
import NuevaTarea from '../../screens/nueva-tarea/NuevaTarea';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
    )
}



const StackNav = () => {

    const userIsLoged = [
        {
            name: 'notification',
            component: Notification
        },
        {
            name: 'nueva-tarea',
            component: NuevaTarea
        }
    ]

    const user = useSelector(state => state.user)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="botton-tab" component={BottomTab} />
            {
                userIsLoged.map((item) => (
                    <Stack.Screen name={item.name} component={item.component} />
                ))
            }

        </Stack.Navigator>
    )
}

export { StackNav, UserNavigation }