import React, { useState } from 'react'
import { Button, FormControl, Input, VStack, View } from 'native-base'
import RenderText from '../../components/renderText/RenderText'
import { useDispatch } from 'react-redux'
import { logUser } from '../../store/user/UserSlice'

const Login = () => {

  const dispatch = useDispatch()
  const [data, setData] = useState({
    nombre: '',
    email: '',
  })


  const handleLogin = () => {
    dispatch(logUser({ state: true, name: data.nombre, email: data.email }))
  }

  return (
    <View h={'100%'} w={'100%'}>
      <VStack
        alignItems={'center'}
        space={5}
      >
        <VStack
          mt={10}
        >
          <FormControl>
            <FormControl.Label>Nombre</FormControl.Label>
            <Input
              w={'90%'}
              placeholder="ingrese su nombre"
              size={'lg'}
              placeholderTextColor={'grey'}
              value={data.nombre}

              onChangeText={(text) => setData({ ...data, nombre: text })}
            />
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={data.email}
              onChangeText={(text) => setData({ ...data, email: text })}
              w={'90%'}
              type='mail'
              size={'lg'}
              placeholder='ingrese su email'
              placeholderTextColor={'grey'}
            />
          </FormControl>
        </VStack>

        <Button
          onPress={handleLogin}
          bgColor={'yellow.400'}
          w={'90%'}
          isDisabled={data.nombre !== "" && data.email !== "" ? false : true}
        >
          Login
        </Button>
      </VStack>
    </View >
  )
}

export default Login