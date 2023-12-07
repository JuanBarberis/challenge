import React, { useState, useEffect } from 'react'
import { Checkbox, HStack, Text, VStack, View } from 'native-base'
import RenderText from '../../../components/renderText/RenderText'
import { StyleSheet } from "react-native"
import { useDispatch, useSelector } from 'react-redux'
import { modificarEstado } from '../../../store/tareas/TareaSlice'


const Item = ({ item, isCompletedView }) => {
    console.log(item, 'copleted')
    const dispatch = useDispatch()
    const tareasCompletadas = useSelector((state) => state.tareas.tareasCompletadas);

    // Verificar si la tarea está completada
    const isCompleted = tareasCompletadas.some((tarea) => tarea.titulo === item.titulo);
    const [checked, setChecked] = useState(item.estado)

    const handleCheckboxChange = () => {
        setChecked(!checked);

        if (isCompletedView && !checked) {
            // Si se está renderizando en tareas finalizadas y el checkbox está desmarcado, puedes realizar la lógica para eliminar la tarea de la vista
            // Puedes llamar a una acción para eliminar la tarea de la lista de tareas completadas
            dispatch(eliminarTareaCompletada(item.titulo));
        }
    };

    useEffect(() => {
        if (item.estado !== checked) {
            // Actualizar el estado de completitud en Redux cuando cambia el estado local
            dispatch(modificarEstado({ titulo: item.titulo, estado: checked }));
        }
    }, [checked]);


    return (
        <View style={styles.box}>
            <HStack alignItems={'center'} space={3} ml={3}>
                <Checkbox
                    aria-label="Seleccionar elemento"
                    colorScheme={'yellow'}
                    isChecked={checked}
                    isReadOnly={isCompletedView}
                    onChange={handleCheckboxChange}
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