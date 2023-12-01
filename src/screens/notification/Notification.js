import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const Notification = () => {

    const navigation = useNavigation()
  return (
    <View>
      <Text>Notification</Text>
      <Text 
      onPress={()=> navigation.navigate('home')}
      >volver a home</Text>

    </View>
  )
}

export default Notification