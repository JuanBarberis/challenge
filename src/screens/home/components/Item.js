import React from 'react'
import { Checkbox, HStack, VStack, View } from 'native-base'
import RenderText from '../../../components/renderText/RenderText'
import { StyleSheet } from "react-native"


const Item = ({ item }) => {


    return (
        <View  style={styles.box}>
            <HStack  alignItems={'center'} space={3} ml={3}>
                <Checkbox />
                <VStack >
                    <RenderText size={'md'} text={item.titulo.toUpperCase()} />
                    <RenderText size={'sm'} color={'grey'} text={item.descripcion} />
                </VStack>
            </HStack>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    box: {
        padding: 3,
        borderWidth: 1,
        borderRadius:5,
        width: '98%',
        alignSelf: 'center',
        backgroundColor:'white',
        marginTop:10,
        elevation:5
        
    }
})