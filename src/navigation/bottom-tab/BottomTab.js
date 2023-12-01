import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import Home from '../../screens/home/Home';
import TareasFinalizadas from '../../screens/tareas-finalizada/TareasFinalizadas';
import TareasPendientes from '../../screens/tareas-pendientes/TareasPendientes';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tareas-finalizadas" component={TareasFinalizadas} />
      <Tab.Screen name="tareas-Pendientes" component={TareasPendientes} />
    </Tab.Navigator>
  )
}

export default BottomTab