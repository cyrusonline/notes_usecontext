import React from 'react';
import {View,Text,Button, FlatList} from 'react-native';
import { useSelector } from 'react-redux'

const FavNotes = props => {

     const favnotes = useSelector(state => state.notes.favNotes)
    return (
        <View><Text>{JSON.stringify(favnotes)}</Text>
        </View>
    )
}

export default FavNotes