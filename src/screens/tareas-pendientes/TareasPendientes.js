import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const TareasPendientes = () => {

  const tareas = useSelector(state => state.tareas)
  console.log(tareas, 'tarea pendientes')

  return (
    <View>
      <Text>TareasPendientes</Text>
    </View>
  )
}

export default TareasPendientes