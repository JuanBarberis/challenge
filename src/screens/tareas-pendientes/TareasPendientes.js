import { FlatList, Text, VStack, View } from 'native-base'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import RenderText from '../../components/renderText/RenderText'
import Item from '../home/components/Item'

const TareasPendientes = () => {

  const tareas = useSelector(state => state.tareas.tareas)
  const tareasPendientes = tareas.filter((tarea) => tarea.estado === false)

  useEffect(() => { }, [tareasPendientes])
  return (
    <View h={'100%'} >
      <VStack h={'10%'} bgColor={'yellow.400'} alignItems={'center'} justifyContent={'center'}>
        <RenderText
          text={'TAREAS Pendientes'}
          size={'2xl'}
          color={'white'}
        />
      </VStack>
      <FlatList data={tareasPendientes} renderItem={({ item, index }) => (
        <Item
          key={index}
          item={item}
        />
      )} />
    </View>
  )
}

export default TareasPendientes