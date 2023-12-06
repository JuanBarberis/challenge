import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux'

const TareasFinalizadas = () => {
  const tareasCompletadas = useSelector(state => state.tareas.tareasCompletadas)
  const navigation = useNavigation()
  
  console.log(tareasCompletadas)

  return (
    <View>
      <Text>TareasFinalizadas</Text>
      <Text onPress={() => navigation.navigate('notification')}>ir a notificaciones</Text>
    </View>
  )
}

export default TareasFinalizadas

