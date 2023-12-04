import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const TareasFinalizadas = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Text>TareasFinalizadas</Text>
      <Text onPress={()=> navigation.navigate('notification')}>ir a notificaciones</Text>

    </View>
  )
}

export default TareasFinalizadas