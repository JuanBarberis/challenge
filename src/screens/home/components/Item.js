import React, { useState } from 'react'
import { Checkbox, HStack, Text, VStack, View } from 'native-base'
import RenderText from '../../../components/renderText/RenderText'
import { StyleSheet } from "react-native"


const Item = ({ item }) => {

    const [checked, setChecked] = useState(false)
    console.log(checked)
    return (
        <View style={styles.box}>
            <HStack alignItems={'center'} space={3} ml={3}>
                <Checkbox
                    aria-label="Seleccionar elemento"
                    colorScheme={'yellow'}
                    onChange={() => setChecked(!checked)}
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
        borderWidth: 1,
        borderRadius: 5,
        width: '98%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        elevation: 5

    },
    text: {
        textDecorationLine: 'line-through'
    }
})