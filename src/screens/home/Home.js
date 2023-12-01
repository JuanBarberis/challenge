import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
const Home = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <Button
                title='ir a notification'
                onPress={() => navigation.navigate('notification')}
            />
        </View>
    )
}

export default Home