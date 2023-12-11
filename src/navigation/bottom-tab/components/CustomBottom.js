import React, { useState } from 'react'
import { Text, View, Icon, HStack, VStack, Button } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import CustomIcon from '../../../components/icon/CustomIcon'
import RenderText from '../../../components/renderText/RenderText'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/user/UserSlice'
import CustomModal from '../../../components/modal/CustomModal'

const CustomBottom = (props) => {
    const isFocus = props.state.routes[props.state.index].name
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        dispatch(signOut({ state: false }))
    }


    return (
        <>
            <HStack
                bgColor={'white'}
                p={2}
                justifyContent={'space-between'}
            >
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('tareas-Finalizadas')}
                >
                    <CustomIcon
                        name={'briefcase'}
                        size={'xl'}
                        color={isFocus === 'tareas-Finalizadas' ? 'yellow.500' : 'grey'}
                    />
                    <RenderText
                        text={'Finalizada'}
                        size={'md'}
                        color={isFocus === 'tareas-Finalizadas' ? 'yellow.500' : 'grey'}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Home')}>
                    <CustomIcon
                        name={'home'}
                        size={'xl'}
                        color={isFocus === 'Home' ? 'yellow.500' : 'grey'}

                    />
                    <RenderText
                        text={'Home'}
                        size={'md'}
                        color={isFocus === 'Home' ? 'yellow.500' : 'grey'}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('tareas-Pendientes')}>
                    <CustomIcon
                        name={'folder'}
                        size={'xl'}
                        color={isFocus === 'tareas-Pendientes' ? 'yellow.500' : 'grey'}

                    />
                    <RenderText
                        text={'Pendientes'}
                        size={'md'}
                        color={isFocus === 'tareas-Pendientes' ? 'yellow.500' : 'grey'}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setOpen(true)}>
                    <CustomIcon
                        name={'log-out'}
                        size={'xl'}

                    />
                    <RenderText
                        text={'Cerrar Sesión'}
                        size={'md'}

                    />
                </TouchableOpacity>
            </HStack >

            <CustomModal isOpen={open} onClose={() => setOpen(false)}>
                <VStack p={5} mt={5}>
                    <RenderText
                        text={'Estas seguro que quieres cerrar sesión ?'}
                        size={'lg'}
                    />
                    <HStack
                        alignSelf={'center'}
                        space={5}
                        mt={5}
                    >
                        <Button
                            variant={'subtle'}
                            colorScheme={'yellow'}
                            onPress={() => setOpen(false)}
                        >
                            CANCELAR
                        </Button>
                        <Button
                            colorScheme={'yellow'}
                            onPress={handleLogOut}
                        >
                            ACEPTAR
                        </Button>
                    </HStack>
                </VStack>

            </CustomModal>

        </>

    )
}

export default CustomBottom