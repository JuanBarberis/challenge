import { Text } from 'native-base'
import React from 'react'

const RenderText = ({
    text,
    family,
    weight,
    size,
    color,
    styles,
    callback,
}) => {
    return (
        <Text
            fontFamily={family}
            fontSize={size}
            fontWeight={weight}
            color={color}
            style={styles}
        >
            {text}
        </Text>
    )
}

export default RenderText