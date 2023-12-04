import React from 'react'
import { Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const CustomIcon = ({
    name,
    type,
    color,
    style,
    callback,
    size
}) => {
    return (
        <TouchableOpacity onPress={callback}>
            <Icon
                as={type === 'Ionicons' ? Ionicons : Entypo}
                name={name}
                color={color}
                size={size}
                style={style}
            />
        </TouchableOpacity>
    )
}

export default CustomIcon