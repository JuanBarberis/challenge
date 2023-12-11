import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux'
import { FlatList, VStack, View } from 'native-base'
import Item from '../home/components/Item'
import RenderText from '../../components/renderText/RenderText'

const TareasFinalizadas = () => {

  const tareasCompletadas = useSelector((state) => state.tareas.tareas.filter((tarea) => tarea.estado === true));
  
  return (
    <View h={'100%'} >
      <VStack h={'10%'} bgColor={'yellow.400'} alignItems={'center'} justifyContent={'center'}>
        <RenderText
          text={'TAREAS COMPLETADAS'}
          size={'2xl'}
          color={'white'}
        />
      </VStack>
      <FlatList data={tareasCompletadas} renderItem={({ item, index }) => (
        <Item
          key={index}
          item={item}
        />
      )} />
    </View>
  )
}

export default TareasFinalizadas

