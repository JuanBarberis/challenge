import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Button, Text, VStack, View } from 'native-base'
import RenderText from '../../components/renderText/RenderText'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/user/UserSlice'
import CustomIcon from '../../components/icon/CustomIcon'
import CustomModal from '../../components/modal/CustomModal'

const Home = () => {

    //Utilidades
    const navigation = useNavigation()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    //Variables
    const [data, setData] = useState()
    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        dispatch(signOut({ state: false }))
    }

    return (
        <>
            <View h={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <VStack>
                    <Text>Bienvenido {user.name.toUpperCase()}</Text>

                </VStack>
                {/* <Button
                onPress={() => navigation.navigate('notification')}
                bgColor={'yellow.400'}
                w={'90%'}
            >
                Ir a Notification
            </Button> */}
                <View
                    position={'absolute'}
                    bottom={7}
                    right={3}
                >
                    <CustomIcon
                        name={'add-outline'}
                        type={'Ionicons'}
                        size={'lg'}
                        color={'white'}
                        style={{
                            backgroundColor: '#faa80f',
                            borderRadius: 3
                        }}
                        callback={() => setOpen(true)}
                    />
                </View>
                <TouchableOpacity onPress={handleLogOut}>
                    <RenderText text={"Cerrar Sesión"} />
                </TouchableOpacity>
            </View>

            <CustomModal
                isOpen={open}
                onClose={() => setOpen(false)}
            >
                <VStack p={5}>

                </VStack>
            </CustomModal>
        </>

    )
}

export default Home