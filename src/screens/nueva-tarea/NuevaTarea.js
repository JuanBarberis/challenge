import { Button, FormControl, Input, TextArea, VStack, View } from 'native-base'
import React, { useState } from 'react'
import RenderText from '../../components/renderText/RenderText'
import CustomIcon from '../../components/icon/CustomIcon'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { agregarTarea } from '../../store/tareas/TareaSlice'

const NuevaTarea = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [error, setError] = useState("")
    const [tarea, setTarea] = useState({
        titulo: '',
        descripcion: '',

    })
    const task = useSelector(state => state.tareas.tareas)

    const buscarPorNombre = () => {
        console.log('hola')
        for (let i in task) {
            if (task[i].titulo.toLowerCase() === tarea.titulo.toLowerCase()) {
                setError("Este nombre ya existe")
                return
            }
        }
        if (error !== "") setError("")
        newTask()
    }

    const newTask = () => {
        dispatch(agregarTarea(tarea));
        navigation.navigate('Home')
    }

    return (
        <View
            alignItems={'center'}
            p={4}
            h={'100%'}
        >
            <VStack position={'absolute'} left={3} top={4}>
                <CustomIcon name={'close-outline'} type={'Ionicons'} size={'lg'} color={'black'} callback={() => navigation.goBack()} />
            </VStack>

            <RenderText
                text={'NUEVA TAREA'}
                size={'2xl'}
                weight={'bold'}
                color={'yellow.500'}
                styles={{ marginTop: 15 }}
            />
            <VStack
                h={'90%'}
                w={'100%'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >

                <VStack space={5} mt={10}>
                    <Input
                        placeholder='Titulo de la tarea'
                        variant={'underlined'}
                        width={'100%'}
                        onChangeText={(text) => setTarea({ ...tarea, titulo: text })}
                        size={'lg'}
                        value={tarea.titulo}
                    />
                    <TextArea
                        placeholder='descripción de la tarea'
                        value={tarea.descripcion}
                        width={'100%'}
                        size={'lg'}
                        onChangeText={(text) => setTarea({ ...tarea, descripcion: text })}
                    />
                </VStack>
                <Button w={'100%'} bgColor={'yellow.400'} size={'lg'} onPress={buscarPorNombre}>Guardar</Button>
            </VStack>

        </View>
    )
}

export default NuevaTarea