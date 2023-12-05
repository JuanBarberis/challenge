import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNav, UserNavigation } from './stack-nav/StackNav'
import { useSelector } from 'react-redux'

const AppNavigator = () => {

  const user = useSelector(state => state.user)

  return (
    <NavigationContainer>
      {
        user.state ?
          <StackNav />
          :
          <UserNavigation />
      }
    </NavigationContainer>
  )
}

export default AppNavigator