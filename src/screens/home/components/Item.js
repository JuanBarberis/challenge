import React, { useState, useEffect } from 'react'
import { Checkbox, HStack, Text, VStack, View } from 'native-base'
import RenderText from '../../../components/renderText/RenderText'
import { StyleSheet } from "react-native"
import { useDispatch } from 'react-redux'
import { modificarEstado } from '../../../store/tareas/TareaSlice'


const Item = ({ item }) => {

    const dispatch = useDispatch()
    const [checked, setChecked] = useState(item.estado)
    
    useEffect(() => {
        // Actualizar el estado de completitud en Redux cuando cambia el estado local
        dispatch(modificarEstado({ titulo: item.titulo, estado: checked }));
    }, [checked]);
    return (
        <View style={styles.box}>
            <HStack alignItems={'center'} space={3} ml={3}>
                <Checkbox
                    aria-label="Seleccionar elemento"
                    colorScheme={'yellow'}
                    onChange={() => { setChecked(!checked) }}
                />
                <VStack >
                    <RenderText
                        size={'md'}
                        text={item.titulo.toUpperCase()}
                        styles={checked === true ? styles.text : null}
                    />
                    <RenderText
                        size={'sm'}
                        color={'grey'}
                        text={item.descripcion}
                        styles={checked === true ? styles.text : null}
                    />
                </VStack>
            </HStack>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    box: {
        padding: 3,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        elevation: 5

    },
    text: {
        textDecorationLine: 'line-through'
    }
})