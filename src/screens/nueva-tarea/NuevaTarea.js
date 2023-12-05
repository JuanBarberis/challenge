import { FormControl, Input, TextArea, VStack, View } from 'native-base'
import React, { useState } from 'react'
import RenderText from '../../components/renderText/RenderText'
import CustomIcon from '../../components/icon/CustomIcon'
import { useNavigation } from '@react-navigation/native'

const NuevaTarea = () => {

    const navigation = useNavigation()
    const [tarea, setTarea] = useState({
        titulo: '',
        descripcion: '',
    })


    return (
        <View
            alignItems={'center'}
            p={4}
        >
            <VStack
                position={'absolute'}
                left={3}
                top={2}
            >
                <CustomIcon
                    name={'close-outline'}
                    type={'Ionicons'}
                    size={'lg'}
                    color={'black'}
                    callback={() => navigation.goBack()}
                />
            </VStack>
            <RenderText
                text={'NUEVA TAREA'}
                size={'2xl'}
                weight={'bold'}
                color={'yellow.500'}
            />
            <VStack
                alignSelf={'center'}
                space={5}
            >


                <Input
                    placeholder='Titulo de la tarea'
                    variant={'underlined'}
                    width={'90%'}
                    onChangeText={(text) => setTarea({ ...tarea, titulo: text })}
                    size={'lg'}
                    value={tarea.titulo}
                />
                <TextArea
                    placeholder='descripción de la tarea'
                    value={tarea.descripcion}
                    width={'90%'}
                    size={'lg'}
                    onChangeText={(text) => setTarea({ ...tarea, descripcion: text })}
                />

            </VStack>
        </View>
    )
}

export default NuevaTarea