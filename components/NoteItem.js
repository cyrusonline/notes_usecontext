import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

const NoteItem = props => {
    return (
        <View style={styles.row}>
      
      <Text>{props.title}</Text>
      <TouchableOpacity onPress={props.onToggleFav}>
      <Ionicons name={props.isFav?'ios-star':'ios-star-outline'} size={32} color="green" />
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        paddingVertical:25,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1
      }
})

export default NoteItem