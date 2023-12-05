import React from 'react'
import { Text, View, Icon, HStack } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import CustomIcon from '../../../components/icon/CustomIcon'
import RenderText from '../../../components/renderText/RenderText'

const CustomBottom = (props) => {
    const isFocus = props.state.routes[props.state.index].name
    const navigation = useNavigation()

    return (
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
        </HStack>
    )
}

export default CustomBottom