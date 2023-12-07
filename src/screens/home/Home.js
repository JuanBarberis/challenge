import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Button, FlatList, FormControl, Input, Text, VStack, View } from 'native-base'
import RenderText from '../../components/renderText/RenderText'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/user/UserSlice'
import CustomIcon from '../../components/icon/CustomIcon'
import CustomModal from '../../components/modal/CustomModal'
import Item from './components/Item'

const Home = () => {

    //Utilidades
    const navigation = useNavigation()
    const user = useSelector(state => state.user)
    const tareas = useSelector(state => state.tareas.tareas)
    const dispatch = useDispatch()

    //Variables

    const [open, setOpen] = useState(false)


    const handleLogOut = () => {
        dispatch(signOut({ state: false }))
    }

    return (
        <>
            <View h={'100%'} justifyContent={'space-between'} >
                <VStack alignItems={'center'} mt={5}>
                    <RenderText size={'xl'} text={`BIENVENIDO ${user.name.toUpperCase()}`} />
                </VStack>
                <FlatList data={tareas} renderItem={({ item, index }) => (
                    <Item
                        key={index}
                        item={item}
                    />
                )} />

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
                        callback={() => navigation.navigate('nueva-tarea')}
                    />
                </View>
                <TouchableOpacity onPress={handleLogOut}>
                    <RenderText text={"Cerrar Sesión"} />
                </TouchableOpacity>
            </View>

        </>

    )
}

export default Home