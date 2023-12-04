import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './src/navigation/stack-nav/StackNav'
import { NativeBaseProvider } from "native-base";
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNav />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App