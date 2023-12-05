import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from 'native-base'
import RenderText from '../../components/renderText/RenderText'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/user/UserSlice'

const Home = () => {

    const navigation = useNavigation()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(signOut({ state: false }))
    }

    return (
        <View h={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Text>Bienvenido {user.name.toUpperCase()}</Text>
            <Button
                onPress={() => navigation.navigate('notification')}
                bgColor={'orange.400'}
                w={'90%'}
            >
                Ir a Notification
            </Button>
            <TouchableOpacity onPress={handleLogOut}>
                <RenderText text={"Cerrar Sesión"} />
            </TouchableOpacity>
        </View>
    )
}

export default Home