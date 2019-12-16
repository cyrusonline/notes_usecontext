import React from 'react';
import {View,Text,Button} from 'react-native';
const FavNotes = props => {
    return (
        <View><Text>Hello</Text>
        <Button title="go to another screen" onPress={()=>{props.navigation.navigate('notes')}}/>
        </View>
    )
}

export default FavNotes