import { View, Text } from 'react-native'
import React from 'react'

const CustomBottom = (props) => {
    const isFocus = props.state.routes[props.state.index].name
    console.log(isFocus)
  return (
    <View>
      <Text>CustomBottom</Text>
    </View>
  )
}

export default CustomBottom