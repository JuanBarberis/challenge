import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import Home from '../../screens/home/Home';
import TareasFinalizadas from '../../screens/tareas-finalizada/TareasFinalizadas';
import TareasPendientes from '../../screens/tareas-pendientes/TareasPendientes';
import CustomBottom from './components/CustomBottom';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const tabSreens = [
    {
      name: 'tareas-Finalizadas',
      component: TareasFinalizadas
    },
    {
      name: 'Home',
      component: Home
    },
    {
      name: 'tareas-Pendientes',
      component: TareasPendientes
    }
  ]

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props=> <CustomBottom {...props}/>}
      screenOptions={{
        headerShown: false, 
    }}
    >
      {
        tabSreens.map((item, index) => {
          return (
            <>
              <Tab.Screen key={index} name={item.name} component={item.component} />
            </>
          )
        }
        )}
    </Tab.Navigator>
  )
}

export default BottomTab